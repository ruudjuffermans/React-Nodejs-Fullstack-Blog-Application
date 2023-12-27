import winston from "winston";
import chalk from "chalk-template";
import { getYearMonthDay } from "../utils/timeFormat.js";

const env = process.env.ENV;

const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf } = format;

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

export class BaseLogger {
  constructor(serviceName, consoleFormatter, logFormatter) {
    const { year, month, day } = getYearMonthDay();
    this.consoleFormatter = consoleFormatter || consoleFormat;
    this.logFormatter = logFormatter || logFormat;
    this.logger = createLogger({
      level: "debug",
      defaultMeta: { service: "logger" },
      format: format.combine(
        format.label({ label: serviceName }),
        format.timestamp(),
        printf(this.logFormatter)
      ),
      transports: [
        new transports.File({
          dirname: "logs",
          filename: `${year}-${month}-${day}-error.log`,
          level: "error",
        }),
        new transports.File({
          dirname: "logs",
          filename: `${year}-${month}-${day}.log`,
        }),
        new transports.Console({
          format: combine(
            label({ label: "development" }),
            timestamp(),
            printf(this.consoleFormatter)
          ),
        }),
      ],
    });
  }

  log(level, message) {
    this.logger.log(level, message);
  }
}
