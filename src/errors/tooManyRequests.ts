import RestError from "./restError";

export class TooManyRequests extends RestError {

    constructor(message: string, statusCode = 429) {
        super(statusCode, message);
    }
    
}