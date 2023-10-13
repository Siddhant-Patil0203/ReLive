import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

const SMTP_MAIL = process.env.SMTP_MAIL;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

const Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: SMTP_MAIL, pass: SMTP_PASSWORD },
});

const sendWelcomeMail = async (email) => {
  let info = await Transporter.sendMail({
    from: SMTP_MAIL,
    to: email,
    subject: `Welcome to Relive!!`,

    html: `<b>Hello!</b>,<br/><br/>
      Thank you for registering at Relive!<br />
      We're excited to have you on board. Check out the Relive application and its amazing ML Feature: <br/>
      <b>https://github.com/Siddhant-Patil0203/localhost-3000</b><br/><br/>

      Please complete the onboarding process on ARrow app if you haven't.<br/><br/>

      If you encounter any issues or have any questions, please don't hesitate to reach out to our support team at <b>stichhub.office@gmail.com</b> . We're here to help!<br/><br/>

      We're thrilled to have you on board.<br/>
      Thank you for choosing Relive!<br/><br/>
      
      Best regards,<br/>
      The Relive Team<br/>`,
  });
};

export default sendWelcomeMail;
