import RestError from "./restError";

export class BadRequest extends RestError {

    constructor(message: string, statusCode = 400) {
        super(statusCode, message);
    }
    
}