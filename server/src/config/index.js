import dotenv from "dotenv";

dotenv.config();

function defaults(key, defaultValue) {
  if (process.env[key] === undefined) {
    return defaultValue;
  }
  return process.env[key];
}

const config = {
  ENV: defaults("ENV", "development"),

  DB_NAME: defaults("DB_NAME", "store"),
  DB_DIALECT: defaults("DB_DIALECT", "mysql"),
  DB_USER: defaults("DB_USER", "manager"),
  DB_PASSWORD: defaults("DB_PASSWORD", "manager"),
  DB_HOST: defaults("DB_HOST", "localhost"),
  DB_PORT: defaults("DB_PORT", 3307),

  CLIENT_URL: defaults("CLIENT_URL", "http://localhost:3000"),
  SERVER_URL: defaults("SERVER_URL", "http://localhost:3201"),
  SERVER_PORT: defaults("BACKEND_PORT", 3201),
  CLIENT_PORT: defaults("CLIENT_PORT", 3000),

  TOKEN_SECRET: defaults("TOKEN_SECRET", "123"),
  APP_NAME: defaults("APP_NAME", ""),

  MAIL_SMTP_HOST: defaults("MAIL_SMTP_HOST", ""),
  MAIL_PORT: defaults("MAIL_PORT", 465),
  MAIL_SECURE: defaults("MAIL_SECURE", true),
  MAIL_SENDER: defaults("MAIL_SENDER", ""),
  MAIL_USER: defaults("MAIL_USER", ""),
  MAIL_PASSWORD: defaults("MAIL_PASSWORD", ""),
};

export default config;
