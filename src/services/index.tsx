export const sendEmail = async (email: string, message: string) => {
  const res = await fetch("/.netlify/functions/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: email,
      subject: "Mensaje desde tu Portfolio",
      html: `<p>${message}</p>`,
    }),
  });

  const data = await res.json();
  return data;
};
