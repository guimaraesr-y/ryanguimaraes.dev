import { NextResponse } from "next/server"
import RestError from "./restError";

const handleError = (err: RestError) => {
    return NextResponse.json({ 
        message: err.message 
    }, { 
        status: 500
    });
}

export default handleError;