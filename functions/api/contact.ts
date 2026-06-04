interface Env {
  RESEND_API_KEY: string;
}

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const onRequestPost: PagesFunction<
  Env
> = async ({
  request,
  env,
}) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin":
      "*",
    "Content-Type":
      "application/json",
  };

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({
        error:
          "Invalid request body.",
      }),
      {
        status: 400,
        headers: corsHeaders,
      }
    );
  }

  const {
    name,
    email,
    message,
  } = body;

  // Validation
  if (
    !name?.trim() ||
    !email?.trim() ||
    !message?.trim()
  ) {
    return new Response(
      JSON.stringify({
        error:
          "All fields are required.",
      }),
      {
        status: 400,
        headers: corsHeaders,
      }
    );
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({
        error:
          "Invalid email address.",
      }),
      {
        status: 400,
        headers: corsHeaders,
      }
    );
  }

  const html = `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      background: #0a0a0a;
      color: #ffffff;
      padding: 32px;
      border-radius: 12px;
      border: 1px solid #1f1f1f;
    ">
      <p style="
        color: #34d399;
        font-size: 12px;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: 0 0 24px;
      ">
        — New Portfolio Message
      </p>

      <h2 style="
        margin: 0 0 24px;
        font-size: 24px;
        color: white;
      ">
        Contact Inquiry
      </h2>

      <table style="
        width: 100%;
        border-collapse: collapse;
      ">
        <tr>
          <td style="
            color: #9ca3af;
            padding: 8px 0;
            width: 90px;
          ">
            Name
          </td>

          <td style="
            color: white;
            padding: 8px 0;
          ">
            ${name}
          </td>
        </tr>

        <tr>
          <td style="
            color: #9ca3af;
            padding: 8px 0;
          ">
            Email
          </td>

          <td style="
            padding: 8px 0;
          ">
            <a
              href="mailto:${email}"
              style="
                color: #34d399;
                text-decoration: none;
              "
            >
              ${email}
            </a>
          </td>
        </tr>
      </table>

      <hr style="
        border: none;
        border-top: 1px solid #1f1f1f;
        margin: 24px 0;
      " />

      <p style="
        color: #9ca3af;
        margin-bottom: 10px;
      ">
        Message
      </p>

      <p style="
        color: white;
        line-height: 1.7;
        white-space: pre-wrap;
        margin: 0;
      ">
        ${message}
      </p>
    </div>
  `;

  try {
    const res = await fetch(
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
            "Radwa Portfolio <onboarding@resend.dev>",

          to: "radwaelhenawy8@gmail.com",

          reply_to: email,

          subject: `New Portfolio Message from ${name}`,

          html,
        }),
      }
    );

    if (!res.ok) {
      const err =
        await res.text();

      console.error(
        "Resend error:",
        err
      );

      return new Response(
        JSON.stringify({
          error:
            "Failed to send message.",
        }),
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error(
      "Server error:",
      error
    );

    return new Response(
      JSON.stringify({
        error:
          "Something went wrong.",
      }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
};

export const onRequestOptions: PagesFunction =
  async () => {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin":
          "*",
        "Access-Control-Allow-Methods":
          "POST, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type",
      },
    });
  };