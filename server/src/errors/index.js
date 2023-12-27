export class BaseError extends Error {
  constructor(name, statusCode, message, isOperational = true, stack = "") {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toString() {
    return `${this.name}: ${this.message} (Status: ${this.statusCode})`;
  }
}

export class RouteNotFoundError extends BaseError {
  constructor(message = "The requested route was not found") {
    super("RouteNotFoundError", 404, message);
  }
}

export class NotFoundError extends BaseError {
  constructor(message = "The requested resource was not found") {
    super("NotFoundError", 404, message);
  }
}

export class BadRequestError extends BaseError {
  constructor(message = "Bad Request") {
    super("BadRequestError", 400, message);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message = "Unauthorized") {
    super("UnauthorizedError", 401, message);
  }
}

export class ForbiddenError extends BaseError {
  constructor(message = "Forbidden") {
    super("ForbiddenError", 403, message);
  }
}

export class ConflictError extends BaseError {
  constructor(message = "Conflict") {
    super("ConflictError", 409, message);
  }
}

export class InternalServerError extends BaseError {
  constructor(message = "Internal Server Error") {
    super("InternalServerError", 500, message);
  }
}
