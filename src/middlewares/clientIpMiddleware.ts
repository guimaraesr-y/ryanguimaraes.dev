import { NextRequest } from "next/server";
import RequestData from "./requestData";

const clientIpMiddleware = (req: NextRequest, requestData: RequestData) => {
    const ip = 
                req.headers.get("cf-connection-ip") ?? 
                req.headers.get("x-forwarded-for");
            
    requestData.setProperty('ipAddress', ip);
}

export default clientIpMiddleware;