import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error) => {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  if (error.message) return error.message;
  return JSON.stringify(error);
};

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ success: false, error: "Method not allowed" }),
      };
    }

    if (!process.env.RESEND_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: "RESEND_API_KEY is not configured",
        }),
      };
    }

    const { to, subject, html } = JSON.parse(event.body);

    if (!to || !subject || !html) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: "Missing email data" }),
      };
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject,
      html,
    });

    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: getErrorMessage(error),
          details: error,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: getErrorMessage(error) }),
    };
  }
};
