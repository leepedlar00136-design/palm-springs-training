import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, role, course, trainingType, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Palm Springs Training <onboarding@resend.dev>",
      to: "palmspringsaesthetics@yahoo.com",
      replyTo: email,
      subject: `New Training Enquiry — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0A0A0A; color: #ffffff;">
          <div style="border-top: 3px solid #C9A961; padding-top: 20px;">
            <h1 style="color: #C9A961; font-weight: 300; letter-spacing: 2px; text-transform: uppercase; font-size: 14px;">New Training Enquiry</h1>
            <h2 style="color: #ffffff; font-weight: 300; font-size: 24px; margin-top: 10px;">Palm Springs Aesthetics Training</h2>
          </div>
          <div style="margin-top: 30px; background: #1a1a1a; padding: 25px; border-left: 3px solid #C9A961;">
            <p style="margin: 0 0 12px 0;"><strong style="color: #C9A961;">Name:</strong> <span style="color: #ffffff;">${name}</span></p>
            <p style="margin: 0 0 12px 0;"><strong style="color: #C9A961;">Email:</strong> <span style="color: #ffffff;">${email}</span></p>
            <p style="margin: 0 0 12px 0;"><strong style="color: #C9A961;">Phone:</strong> <span style="color: #ffffff;">${phone}</span></p>
            <p style="margin: 0 0 12px 0;"><strong style="color: #C9A961;">Professional Role:</strong> <span style="color: #ffffff;">${role || "Not specified"}</span></p>
            <p style="margin: 0 0 12px 0;"><strong style="color: #C9A961;">Interested Course:</strong> <span style="color: #ffffff;">${course || "Not specified"}</span></p>
            <p style="margin: 0 0 12px 0;"><strong style="color: #C9A961;">Preferred Training Type:</strong> <span style="color: #ffffff;">${trainingType || "Not specified"}</span></p>
          </div>
          <div style="margin-top: 20px; background: #1a1a1a; padding: 25px; border-left: 3px solid #C9A961;">
            <p style="color: #C9A961; font-weight: bold; margin: 0 0 10px 0;">Message:</p>
            <p style="color: #ffffff; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; font-size: 12px; color: #666;">
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}