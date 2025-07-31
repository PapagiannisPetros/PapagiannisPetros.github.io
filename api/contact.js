export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).send('Only POST allowed');
    }
  
    const { name, email, message } = req.body;
  
    // Basic spam protection: rate-limit per IP (naive example)
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`Submission from ${ip}`);
  
    // Add logic to store timestamps per IP if needed (e.g., Redis or in-memory)
  
    // ✅ You could use EmailJS API, SendGrid, Nodemailer (with secrets) here
    // For now, just respond back
    console.log("Received:", { name, email, message });
  
    res.status(200).send("Message received! ✅");
  }
  