interface Env {
  RESEND_API_KEY: string;
}

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request;
  env: Env;
}) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({
        error: "Invalid request body.",
      }),
      {
        status: 400,
        headers: corsHeaders,
      }
    );
  }

  const { name, email, message } = body;

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
          "Portfolio <onboarding@resend.dev>",
        to:
          "radwaelhenawy8@gmail.com",
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
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
};

export const onRequestOptions =
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