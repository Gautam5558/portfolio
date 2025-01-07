import { contactFormSchema } from "@/schemas";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();
  const validateFeilds = contactFormSchema.safeParse(data);
  if (!validateFeilds.success) {
    return new Error("Invalid credentials");
  }
  const { name, email, subject, content } = validateFeilds.data;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email address (from .env)
      pass: process.env.EMAIL_PASS, // Your email password or app password (from .env)
    },
    secure: true,
  });

  const mailData = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: content,
    html: `<div>${content}</div><p>Sent from:
    ${name}</p>`,
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
