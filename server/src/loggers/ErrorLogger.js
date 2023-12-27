import { BaseError } from "../errors/index.js";
import { BaseLogger } from "./BaseLogger.js";
import chalk from "chalk-template";

const logFormat = ({ level, message, label, timestamp }) => {
  return `${label} ${timestamp} [${level.toUpperCase()}]: ${message}`;
};

const consoleFormat = ({ level, message, label, timestamp }) => {
  let colorizedLevel;

  switch (level) {
    case "error":
      colorizedLevel = chalk`{red [ERROR]}`;
      break;
    case "warn":
      colorizedLevel = chalk`{yellow [WARN]}`;
      break;
    case "info":
      colorizedLevel = chalk`{blue [INFO]}`;
      break;
    case "debug":
      colorizedLevel = chalk`{green [DEBUG]}`;
      break;
    default:
      colorizedLevel = level;
  }
  return chalk`${colorizedLevel}: ${message}`;
};
export class ErrorLogger extends BaseLogger {
  constructor(serviceName) {
    super(serviceName, consoleFormat, logFormat);
  }

  error(message) {
    if (message instanceof BaseError) {
      super.log("error", message.toString());
    } else {
      super.log("error", message);
    }
  }
}
