import nodemailer from "nodemailer";

// In-memory store for IP rate limiting
const rateLimitCache = new Map();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 60 seconds
const MAX_REQUESTS = 1;

export default async function handler(req, res) {
  // CORS protection
  const allowedOrigin = 'https://papagiannispetros.github.io';
  const origin = req.headers.origin;

  if (origin === allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  } else {
    return res.status(403).json({ message: 'Forbidden: CORS' });
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  // 💡 Rate limiting by IP
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const currentTime = Date.now();
  const requestHistory = rateLimitCache.get(ip) || [];

  const recentRequests = requestHistory.filter(
    timestamp => currentTime - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentRequests.length >= MAX_REQUESTS) {
    return res.status(429).json({ message: 'Too many requests. Please wait and try again.' });
  }

  recentRequests.push(currentTime);
  rateLimitCache.set(ip, recentRequests);

  // ✅ Form handling
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
