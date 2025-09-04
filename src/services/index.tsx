export const sendEmail = async () => {
  const res = await fetch("/.netlify/functions/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: "marcosbruur@gmail.com",
      subject: "Hola desde Netlify",
      html: "<p>Email enviado desde Netlify + React 🎉</p>",
    }),
  });

  const data = await res.json();
  console.log(data);
};
