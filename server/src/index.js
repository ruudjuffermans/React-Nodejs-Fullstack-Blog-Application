import express from "express";
import http from "http";
import chalk from "chalk-template";
import db from "./database/index.js";
import cors from "cors";
import config from "./config/index.js";
import router from "./router/index.js";
import bodyParser from "body-parser";
import logger from "./utils/logger.js";

const corsConfiguration = {
  origin: config.CLIENT_URL,
  credentials: true,
};

const app = express();

try {
  app.use(bodyParser.json());
  app.use(cors(corsConfiguration));
  app.use("/public", express.static("public"));

  app.use((req, res, next) => {
    logger.info(chalk`{green ${req.method}} {blue ${req.url}}`);
    next();
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

  db.sync().then(() => {
    db.options.logging = true;

    app.use(router);
  });

  const env = config.ENV;
  const port = config.SERVER_PORT;

  // Generic error handling middleware

  // Create an HTTP server and pass the Express app as the handler
  const httpServer = new http.Server(app);

  // Start the server
  httpServer.listen(port, () => {
    logger.console.info(
      chalk`server: {green running}, port: {red ${port.toString()}}, env: {blue ${env}}`
    );
  });
  // app.use((err, req, res, next) => {
  //   const statusCode = err.statusCode || 500;
  //   res.status(statusCode).json({
  //     statusCode,
  //     name: err.name,
  //     message: err.message,
  //     path: req.path,
  //     error: err.description,
  //     stack: err.stack,
  //   });
  //   next(err);
  // });

  // app.all("*", (req, res, next) => {
  //   const err = new PageNotFoundError();
  //   next(err);
  // });
} catch (error) {
  console.log("hit");
  console.log(error);
}
