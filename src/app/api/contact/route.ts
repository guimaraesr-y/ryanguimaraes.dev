import { BadRequest } from "@/errors/badRequest";
import contactFormHandler from "@/lib/contactFormHandler/contactFormHandler";
import clientIpMiddleware from "@/middlewares/clientIpMiddleware";
import RequestData from "@/middlewares/requestData";
import requestHandler from "@/middlewares/requestHandler";
import throttlingMiddleware from "@/middlewares/throttlingMiddleware";
import { NextRequest, NextResponse } from "next/server";

import { config as dotenvConfig } from "dotenv-safe";
dotenvConfig();

// in production, limit to 5 requests per 12 hours
// in development, 10 requests per second
const MAX_REQUESTS = process.env.NODE_ENV === 'production' ? 5 : 10;
const PERIOD = process.env.NODE_ENV === 'production' ? 1000 * 60 * 60 * 12 : 1000;


// POST to /api/contact
const contactPost = async (req: NextRequest, requestData: RequestData) => {
    let body;
    const ip = requestData.getProperty('ipAddress');

    try {
        body = {
            ...await req.json(),
            ipAddress: ip,
        };
    } catch (error) {
        console.error(error);
        throw new BadRequest("Invalid JSON input");
    }

    const data = await contactFormHandler(body);
    return NextResponse.json(data, {
        status: 201,
    });
}

export const POST = requestHandler(
    clientIpMiddleware, 
    throttlingMiddleware(MAX_REQUESTS, PERIOD), 
    contactPost
);
