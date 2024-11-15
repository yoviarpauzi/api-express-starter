import type { Request, Response, NextFunction } from "express";
import ResponseError from "../error/response-error";
import { ValidationError } from "joi";

/**
 * Handles errors that occur during the request-response cycle.
 * @param err - The error that occurred.
 * @param req - The current request.
 * @param res - The current response.
 * @param next - The next middleware function in the stack.
 */
const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ResponseError) {
    // If the error is an instance of ResponseError, return the
    // appropriate status code and error message.
    res.status(err.status).json({ error: err.message });
  } else if (err instanceof ValidationError) {
    // If the error is an instance of ValidationError, return a
    // 403 status code and the error message.
    res.status(403).json({ error: err.message });
  } else {
    // If the error is not an instance of ResponseError or
    // ValidationError, return a 500 status code and the
    // generic "Internal Server Error" message.
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default errorMiddleware;
