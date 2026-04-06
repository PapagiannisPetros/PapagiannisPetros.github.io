import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const RATE_LIMIT_WINDOW_SEC = 900;
const MAX_REQUESTS = 2;

const allowedOrigins = [
  "https://papagiannispetros.github.io",
  "https://papagiannis-petros-github-io.vercel.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

function withCors(req: NextRequest, res: NextResponse) {
  const origin = req.headers.get("origin");
  const allowOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  res.headers.set("Access-Control-Allow-Origin", allowOrigin);
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, x-api-key");
  return res;
}

export async function OPTIONS(req: NextRequest) {
  return withCors(req, new NextResponse(null, { status: 200 }));
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = req.headers.get("x-api-key");
    if (apiKey !== process.env.CONTACT_FORM_API_KEY) {
      return withCors(req, NextResponse.json({ message: "Unauthorized" }, { status: 401 }));
    }

    const ipHeader = req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for") || "";
    const ip = ipHeader.split(",")[0].trim();
    if (!ip) {
      return withCors(
        req,
        NextResponse.json({ message: "Unable to determine client IP" }, { status: 500 }),
      );
    }

    const key = `rate:${ip}`;
    const currentCount = await redis.incr(key);
    if (currentCount === 1) await redis.expire(key, RATE_LIMIT_WINDOW_SEC);
    if (currentCount > MAX_REQUESTS) {
      return withCors(
        req,
        NextResponse.json({ message: "Too many requests. Try later." }, { status: 429 }),
      );
    }

    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const website = String(body?.website ?? "").trim();

    if (website) {
      return withCors(req, NextResponse.json({ message: "Message received" }, { status: 200 }));
    }

    if (!name || !email || !message) {
      return withCors(
        req,
        NextResponse.json({ message: "Missing required fields" }, { status: 400 }),
      );
    }

    if (name.length > 100 || subject.length > 150 || message.length > 2000) {
      return withCors(req, NextResponse.json({ message: "Input too long" }, { status: 400 }));
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return withCors(req, NextResponse.json({ message: "Invalid email format" }, { status: 400 }));
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465", 10),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `${name} sent you a message: ${subject || "(no subject)"}`,
      text: `From your site you received the following message:\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return withCors(
      req,
      NextResponse.json({ message: "Email sent successfully" }, { status: 200 }),
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return withCors(req, NextResponse.json({ message: "Server crashed", error: message }, { status: 500 }));
  }
}
