import express from "express";
import http from "http";
import chalk from "chalk-template";
import db from "./database/index.js";
import cors from "cors";
import config from "./config/index.js";
import router from "./router/index.js";
import bodyParser from "body-parser";
import { AccessLogger, ErrorLogger } from "./loggers/index.js";
import { InternalServerError } from "./errors/index.js";

const corsConfiguration = {
  origin: config.CLIENT_URL,
  credentials: true,
};

const app = express();

const accessLogger = new AccessLogger("AccessService");
const errorLogger = new ErrorLogger("ErrorService");

try {
  app.use(bodyParser.json());
  app.use(cors(corsConfiguration));
  app.use("/public", express.static("public"));

  app.use((req, res, next) => {
    accessLogger.access(
      chalk`Received request on {green ${req.method}} {blue ${req.url}} {yellow ${req.path}}`
    );
    next();
  });

  app.use((err, req, res, next) => {
    errorLogger.error("internal server error");
    const error = new InternalServerError();
  });

  db.sync().then(() => {
    db.options.logging = false;

    app.use(router);

    app.use((err, req, res, next) => {
      // const error = new InternalServerError();
      // errorLogger.error(err);
      // console.log(err.message);
      console.log(err)
      console.log(err)
      console.log(err)
      console.log(err)

      res.status(err.statusCode).send({
        success: false,
        message: err.message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }), // Include stack trace in development mode
      });
    });
  });

  const env = config.ENV;
  const port = config.SERVER_PORT;

  // Generic error handling middleware

  // Create an HTTP server and pass the Express app as the handler
  const httpServer = new http.Server(app);

  // Start the server
  httpServer.listen(port, () => {
    accessLogger.access(
      chalk`server: {green running}, port: {red ${port.toString()}}, env: {blue ${env}}`
    );
  });
} catch (error) {
  console.log("hit");
  console.log(error);
}
