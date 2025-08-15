import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { applyCors, corsMiddleware } from "@/lib/cors";

async function handler(req: NextRequest) {
  console.log("📩 Incoming request to /email endpoint");

  try {
    const body = await req.json();
    // console.log("📝 Request body:", body);

    const { content, prompt, senderName, senderEmail, subject } = body;

    // Verify email if provided
    if (senderEmail) {
      console.log(`🔍 Verifying sender email: ${senderEmail}`);

      // Basic format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(senderEmail)) {
        console.warn("❌ Invalid email format");
        return NextResponse.json(
          { error: "Invalid email address" },
          { status: 400 }
        );
      }

      console.log("✅ Email format looks good, checking with Abstract API...");
     const response = await fetch(
        `https://emailreputation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API_KEY}&email=${senderEmail}`,
        { cache: "no-store" }
      );

      console.log(`api_key=${process.env.ABSTRACT_API_KEY}`);
      console.log(`email=${senderEmail}`);

      console.log("🌐 Abstract API response status:", response.status);
      if (!response.ok) {
        throw new Error("Failed to verify email");
      }

      const data = await response.json();
      console.log("🔍 Abstract API data:", data);

      const isValid =
      data?.email_deliverability?.is_format_valid === true &&
      data?.email_deliverability?.status?.toLowerCase() === "deliverable" &&
      data?.email_quality?.is_disposable === false;

      if (!isValid) {
        console.warn("❌ Email failed validation");
        return NextResponse.json(
          { error: "Invalid email address" },
          { status: 400 }
        );
      }
      console.log("✅ Email is valid according to Abstract API");
    }

    console.log("📦 Creating Nodemailer transporter...");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    console.log("🔄 Verifying SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP connection verified");

    const emailSubject =
      subject || `AI Generated Email: ${prompt?.substring(0, 50)}...`;

    const fromAddress = senderEmail
      ? senderName
        ? `"${senderName}" <${process.env.EMAIL_USER}>`
        : `"${senderEmail}" <${process.env.EMAIL_USER}>`
      : `"AI Email Generator" <${process.env.EMAIL_USER}>`;

    console.log("📤 Preparing email with details:", {
      from: fromAddress,
      to: process.env.EMAIL_USER,
      subject: emailSubject,
      content,
    });

    const mailOptions = {
      from: fromAddress,
      to: process.env.EMAIL_USER,
      subject: emailSubject,
      text: content,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">Email Received</h2>
          ${senderName ? `<p><strong>From:</strong> ${senderName}</p>` : ""}
          ${senderEmail ? `<p><strong>Email:</strong> ${senderEmail}</p>` : ""}
          <p><strong>Subject:</strong> ${emailSubject}</p>
          ${prompt ? `<p><strong>Prompt:</strong> ${prompt}</p>` : ""}
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
            ${content.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    };

    console.log("🚀 Sending email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info);

    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: info.messageId,
        details: {
          from: fromAddress,
          subject: emailSubject,
          content: content,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("💥 Error sending email:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to send email", details: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to send email", details: "Unknown error" },
      { status: 500 }
    );
  }
}

export const POST = (req: NextRequest) => applyCors(req, handler);
export const OPTIONS = (req: NextRequest) => corsMiddleware(req);
