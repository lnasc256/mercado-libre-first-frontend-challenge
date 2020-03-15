export abstract class HTTPClientError extends Error {
  readonly statusCode!: number
  readonly name: string

  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

export class HTTP400Error extends HTTPClientError {
  readonly statusCode = 400

  constructor(message: string = 'Bad Request') {
    super(message)
  }
}

export class HTTP404Error extends HTTPClientError {
  readonly statusCode = 404

  constructor(message: string = 'Not found') {
    super(message)
  }
}
