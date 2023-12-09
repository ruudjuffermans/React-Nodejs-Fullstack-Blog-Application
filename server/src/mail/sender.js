import config from "../config/index.js";
import mailer from "./nodeMailer.js";
import {
  getPasswordResetTemplate,
  getActivateAccountTemplate,
} from "./templateLoader.js";

export async function sendActivateAccountMail(email, name, code) {
  const template = await getActivateAccountTemplate(
    encodeURIComponent(email),
    name,
    code,
    config.CLIENT_URL,
    config.SERVER_URL
  );
  const result = mailer(email, "Verify your email", template);
  if (!result) {
    console.error("Sending email did not work");
  }
}

export async function sendResetPasswordMail(email, name, code) {
  const template = await getPasswordResetTemplate(
    encodeURIComponent(email),
    name,
    code,
    config.CLIENT_URL,
    config.SERVER_URL
  );
  const result = mailer(email, "Reset your password", template);
  if (!result) {
    console.error("Sending email did not work");
  }
}
