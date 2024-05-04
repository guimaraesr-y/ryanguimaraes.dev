import RestError from "@/errors/restError";
import { NextRequest, NextResponse } from "next/server"
import RequestData from "./requestData";


/**
 * Middleware function that handles a request by executing a series of handlers.
 */
const requestHandler = (...handlers: Function[]) => async (req: NextRequest, res: NextResponse) => {    
    try {
        // holds the response data from each handler
        const requestData = new RequestData();

        for (const handler of handlers) {
            const result = await handler(req, requestData);

            // if handler returns a response, return it
            if(result) {
                return result;
            }
        }
    } catch (error) {
        if (error instanceof RestError) {
            return NextResponse.json({ 
                message: error.message 
            }, { 
                status: error.statusCode
            });
        } else {
            console.error(error);

            return NextResponse.json({ 
                message: "Internal server error" 
            }, { 
                status: 500 
            });
        }
    }
}

export default requestHandler;