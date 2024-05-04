import RestError from "./restError";

export class InternalServerError extends RestError {

    constructor(message: string, statusCode = 500) {
        super(statusCode, message);
    }
    
}