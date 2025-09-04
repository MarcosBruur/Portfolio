import { Resend } from "resend";

export const sendEmail = async () => {
  const resend = new Resend("aqui va mi api key pero tu no vas verla jej");

  const send = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "marcosbruur@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });

  console.log(send);
};
