export class Response {
  constructor(statusCode, message, data = [], code) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.code = code;
  }

  send(res) {
    res.status(this.statusCode).send({
      code: this.code,
      message: this.message,
      data: this.data,
    });
  }
}
