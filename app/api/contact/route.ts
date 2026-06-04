
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {
  try {
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

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "your@email.com",
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,

      html: `
        <h2>New Contact Form Message</h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>

        <p>
          <strong>Message:</strong>
          ${message}
        </p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Something went wrong",
      },
      { status: 500 }
    );
  }
}

