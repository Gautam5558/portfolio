import { contactFormSchema } from "@/schemas";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();
  const validateFeilds = contactFormSchema.safeParse(data);
  if (!validateFeilds.success) {
    return Response.json("Invalid Credentails", {
      status: 404,
    });
  }
  const { name, email, subject, content } = validateFeilds.data;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_EMAIL_USER, // My email address (from .env)
      pass: process.env.NEXT_EMAIL_PASS, // My email password or app password (from .env)
    },
  });

  const mailData = {
    from: email, // even though i am trying to use email of the sender but gmail doesnt allow it and it automatically uses my email only to send email to me, but with adding replyto , when i reply to this email the reply would go to the email which sent it
    to: process.env.NEXT_EMAIL_USER,
    subject: subject,
    replyTo: email,
    text: content,
    html: `<div>${content}</div><p>Sent from: email:
    ${email} name:${name}</p>`,
  };

  try {
    await transporter.sendMail(mailData);
    return Response.json("Email sent successfully", { status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json("There was some error while sending email", {
      status: 404,
    });
  }
}
