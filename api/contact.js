const nodemailer = require("nodemailer");
const { Redis } = require("@upstash/redis");

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const RATE_LIMIT_WINDOW_SEC = 180;
const MAX_REQUESTS = 1;

module.exports = async function handler(req, res) {
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
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (req.headers["x-api-key"] !== process.env.CONTACT_FORM_API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "")
    .split(",")[0]
    .trim();

  const key = `rate:${ip}`;
  const currentCount = await redis.incr(key);
  if (currentCount === 1) await redis.expire(key, RATE_LIMIT_WINDOW_SEC);

  if (currentCount > MAX_REQUESTS) {
    return res.status(429).json({ message: "Too many requests. Try later." });
  }

  const { name, email, subject, message, website } = req.body;

  if (website && website.trim() !== "") {
    return res.status(200).json({ message: "Message received" });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  if (name.length > 100 || subject?.length > 150 || message.length > 2000) {
    return res.status(400).json({ message: "Input too long" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

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
    from: `"Website Contact" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `${name} sent you a message: ${subject || "(no subject)"}`,
    text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ message: "Failed to send email", error: err.message });
  }
};
