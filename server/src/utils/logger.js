import winston from "winston";
import chalk from "chalk-template";

const env = process.env.ENV;

const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${label} ${timestamp} [${level}]: ${message}`;
});

function getYearMonthDayFilename(s) {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}${s ? `-${s}` : ""}.log`;
}

const consoleFormat = printf(({ level, message, label, timestamp }) => {
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
});

const logger = createLogger({
  level: "debug",
  format: combine(label({ label: env }), timestamp(), logFormat),
  defaultMeta: { service: "logger" },
  transports: [
    new transports.File({
      dirname: "logs",
      filename: getYearMonthDayFilename("error"),
      level: "error",
    }),
    new transports.File({
      dirname: "logs",
      filename: getYearMonthDayFilename(),
    }),
    new transports.Console({
      format: combine(
        label({ label: "development" }),
        timestamp(),
        consoleFormat
      ),
    }),
  ],
});
const consoleOnly = createLogger({
  level: "debug",
  format: combine(label({ label: env }), timestamp(), logFormat),
  defaultMeta: { service: "console" },
  transports: [
    new transports.Console({
      format: combine(
        label({ label: "development" }),
        timestamp(),
        consoleFormat
      ),
    }),
  ],
});

const fileOnly = createLogger({
  level: "debug",
  format: combine(label({ label: env }), timestamp(), logFormat),
  defaultMeta: { service: "console" },
  transports: [
    new transports.File({
      dirname: "logs",
      filename: getYearMonthDayFilename(),
    }),
  ],
});

logger.console = consoleOnly;
logger.file = fileOnly;

// if (env !== "production") {
//   logger.add(
//     new transports.Console({
//       format: combine(
//         label({ label: "development" }),
//         timestamp(),
//         consoleFormat
//       ),
//     })
//   );
// }

// // ***************
// // Allows for JSON logging
// // ***************

// logger.log({
//   level: "info",
//   message: "Pass an object and this works",
//   additional: "properties",
//   are: "passed along",
// });

// logger.info({
//   message: "Use a helper method if you want",
//   additional: "properties",
//   are: "passed along",
// });

// // ***************
// // Allows for parameter-based logging
// // ***************

// logger.log("info", "Pass a message and this works", {
//   additional: "properties",
//   are: "passed along",
// });

// logger.info("Use a helper method if you want", {
//   additional: "properties",
//   are: "passed along",
// });

// // ***************
// // Allows for string interpolation
// // ***************

// // info: test message my string {}
// logger.log("info", "test message %s", "my string");

// // info: test message 123 {}
// logger.log("info", "test message %d", 123);

// // info: test message first second {number: 123}
// logger.log("info", "test message %s, %s", "first", "second", { number: 123 });

// // prints "Found error at %s"
// logger.info("Found %s at %s", "error", new Date());
// logger.info("Found %s at %s", "error", new Error("chill winston"));
// logger.info("Found %s at %s", "error", /WUT/);
// logger.info("Found %s at %s", "error", true);
// logger.info("Found %s at %s", "error", 100.0);
// logger.info("Found %s at %s", "error", ["1, 2, 3"]);

// // ***************
// // Allows for logging Error instances
// // ***************

// logger.warn(new Error("Error passed as info"));
// logger.log("error", new Error("Error passed as message"));

// logger.warn("Maybe important error: ", new Error("Error passed as meta"));
// logger.log("error", "Important error: ", new Error("Error passed as meta"));

// logger.error(new Error("Error as info"));

export default logger;
