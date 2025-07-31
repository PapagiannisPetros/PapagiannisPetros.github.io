import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create transporter with your email service credentials
  // Use environment variables for security!
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,     // e.g., smtp.gmail.com
    port: process.env.SMTP_PORT || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,   // your email
      pass: process.env.SMTP_PASS,   // your email password or app password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECEIVER_EMAIL,   // Your email to receive messages
    subject: `New contact form submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}

  