import AppError from "./appError";

class RestError extends AppError {
    
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
    }

}

export default RestError;