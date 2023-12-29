import sequelize from "sequelize";
import jwt from "jsonwebtoken";
import { ErrorLogger } from "../loggers/index.js";

const errorLogger = new ErrorLogger("ErrorService");

function handleSequelizeError(error, res) {
  if (error instanceof sequelize.UniqueConstraintError) {
    return res.status(409).json({
      message: "Unique constraint error",
      errors: error.errors,
    });
  } else if (error instanceof sequelize.ValidationError) {
    return res.status(400).json({
      message: "Validation error",
      errors: error.errors,
    });
  }
}

function handleJwtError(error, res, next) {
  if (error instanceof jwt.TokenExpiredError) {
    return res.status(401).json({ message: "Token expired" });
  } else if (error instanceof jwt.NotBeforeError) {
    return res.status(401).json({ message: "Token not active" });
  }
}

function logErrorDetails(error) {
  errorLogger.error(`Error Type: ${error.name}`);
  errorLogger.error(`Error Message: ${error.message}`);
  errorLogger.error(`Error Instance: ${error.instance?.constructor.name}`);
}

export default (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    if (error instanceof sequelize.BaseError) return handleSequelizeError(error, res);
    if (error instanceof jwt.JsonWebTokenError) return handleJwtError(error, res);
    logErrorDetails(error);
    next(error);
  }
};
