import nodemailer from "nodemailer";
import config from "../config/index.js";

const transporter = nodemailer.createTransport({
  host: config.MAIL_SMTP_HOST,
  port: config.MAIL_PORT,
  secure: config.MAIL_SECURE,
  tls: config.MAIL_ALLOW_SELF_SIGNED_CERTS
    ? {
        rejectUnauthorized: false,
      }
    : undefined,
  auth: {
    user: config.MAIL_USER,
    pass: config.MAIL_PASSWORD,
  },
});

const smtpSender = async function (to, subject, body) {
  try {
    const response = await transporter.sendMail({
      from: {
        name: config.APP_NAME,
        address: config.MAIL_SENDER,
      },
      to,
      subject,
      html: body,
      attachments: [
        {
          filename: "wave-bg.png",
          path: `./public/site/wave-bg.png`,
          cid: "wave", //same cid value as in the html img src
        },
        {
          filename: "logo.png",
          path: `./public/site/logo.png`,
          cid: "logo", //same cid value as in the html img src
        },
        {
          filename: "reset-password.png",
          path: `./public/site/reset-password.png`,
          cid: "reset", //same cid value as in the html img src
        },
        {
          filename: "activate-account.png",
          path: `./public/site/activate-account.png`,
          cid: "activate", //same cid value as in the html img src
        },
      ],
    });
    return !!response.accepted;
  } catch (e) {
    console.error("SMTP error", e);
    return false;
  }
};

export default smtpSender;
