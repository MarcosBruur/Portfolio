export const sendEmail = async (email: string, message: string) => {
  try {
    const res = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "marcosbruur@gmail.com",
        subject: `Mensaje de ${email}`,
        html: `<p>${message}</p>`,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: data.error ?? "No se pudo enviar el email",
      };
    }

    return data;
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "No se pudo enviar el email",
    };
  }
};
