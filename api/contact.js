import nodemailer from "nodemailer";

// Rate limit in-memory store
const rateLimitCache = new Map();

const RATE_LIMIT_WINDOW_MS = 300 * 1000; // 5 minutes
const MAX_REQUESTS = 1;

export default async function handler(req, res) {
  const allowedOrigin = "https://papagiannispetros.github.io";
  const origin = req.headers.origin;

  if (origin === allowedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  } else {
    return res.status(403).json({ message: "Forbidden: CORS" });
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  // Check API key
  if (req.headers["x-api-key"] !== process.env.CONTACT_FORM_API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Rate limiting by IP
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const now = Date.now();
  const history = rateLimitCache.get(ip) || [];
  const recent = history.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    return res.status(429).json({ message: "Too many requests. Try later." });
  }
  recent.push(now);
  rateLimitCache.set(ip, recent);

  const { name, email, subject, message, website } = req.body;

  // Honeypot check
  if (website && website.trim() !== "") {
    return res.status(200).json({ message: "Message received" }); // Pretend success
  }

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  if (name.length > 100 || subject?.length > 150 || message.length > 2000) {
    return res.status(400).json({ message: "Input too long" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // Mail transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "465", 10),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Website Contact" <${process.env.SMTP_USER}>`, // fixed sender
    replyTo: email, // so you can reply to the sender
    to: process.env.RECEIVER_EMAIL,
    subject: `${name} sent you a message: ${subject || "(no subject)"}`,
    text: `
From: ${name}
Email: ${email}
Subject: ${subject || "(none)"}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
