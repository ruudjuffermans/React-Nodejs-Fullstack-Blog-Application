import fs from "fs/promises";
import path from "path";
import h from "handlebars";

async function getTemplateFile(data, fileName) {
  const file = path.resolve("mail", "templates", fileName);
  const content = await fs.readFile(file, "utf8");
  const template = h.compile(content);
  const result = template(data);
  return result;
}

export async function getActivateAccountTemplate(
  email,
  name,
  code,
  clientUrl,
  serverUrl
) {
  return getTemplateFile(
    { email, name, code, clientUrl, serverUrl },
    "activate-account.html"
  );
}

export async function getPasswordResetTemplate(
  email,
  name,
  code,
  clientUrl,
  serverUrl
) {
  return getTemplateFile(
    { email, name, code, clientUrl, serverUrl },
    "reset-password.html"
  );
}
