/**
 * Custom error class for handling HTTP response errors.
 */
class ResponseError extends Error {
  /**
   * Constructs a new ResponseError instance.
   * @param status - The HTTP status code associated with the error.
   * @param message - A descriptive message for the error.
   */
  constructor(public status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export default ResponseError;
