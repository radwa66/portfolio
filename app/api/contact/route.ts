import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          error: "Missing Resend API key",
        },
        { status: 500 }
      );
    }

    const body = await req.json();

    const { name, email, message } =
      body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error:
            "All fields are required",
        },
        { status: 400 }
      );
    }

    const data =
      await resend.emails.send({
        from: "Radwa Portfolio <hello@yourdomain.com>",
        to: "radwaelhenawy8@gmail.com",
        subject: `New Portfolio Message from ${name}`,
        replyTo: email,
        html: `
          <h2>New Contact Form Message</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong> ${message}</p>
        `,
      });

    console.log(data);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "RESEND ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong",
      },
      { status: 500 }
    );
  }
}