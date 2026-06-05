interface Env {
  RESEND_API_KEY: string;
}

export async function onRequestPost(
  context: {
    request: Request;
    env: Env;
  }
) {
  const { request, env } = context;

  try {
    const body = await request.json();

    const {
      name,
      email,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !message
    ) {
      return Response.json(
        {
          error:
            "All fields are required",
        },
        { status: 400 }
      );
    }

    const response =
      await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            from:
              "Portfolio <onboarding@resend.dev>",
            to: [
              "radwaelhenawy8@gmail.com",
            ],
            subject: `New message from ${name}`,
            reply_to: email,
            html: `
              <h2>New Portfolio Message</h2>

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
          }),
        }
      );

    if (!response.ok) {
      const error =
        await response.text();

      console.error(error);

      return Response.json(
        {
          error:
            "Failed to send email",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error:
          "Something went wrong",
      },
      { status: 500 }
    );
  }
}