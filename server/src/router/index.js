import { RouteNotFoundError } from "../errors/index.js";
import authRouter from "./auth.router.js";
import blogRouter from "./blog.router.js";
import express from "express";
const router = express.Router();
import { ErrorLogger } from "../loggers/index.js";

const errorLogger = new ErrorLogger("ErrorService");

router.get("/health", (req, res) => {
  res.send({
    message: "healsthy",
  });
});

router.use(authRouter);
router.use("/blog", blogRouter);

router.use((req, res, next) => {
  const error = new RouteNotFoundError();
  errorLogger.error(error);
  res.status(error.statusCode).send({
    success: false,
    message: error.message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }), // Include stack trace in development mode
  });
});

export default router;
