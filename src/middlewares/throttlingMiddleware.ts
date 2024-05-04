import { NextRequest } from "next/server";
import getRedisClient from "@/utils/redisClient";
import RequestData from "./requestData";
import { TooManyRequests } from "@/errors/tooManyRequests";

// data stored in redis structure
interface DataStored {
    ipAddress: string;
    timestamp: string;
    count: number;
}

/**
 * Middleware function that limits the number of requests a client can make within a specified period.
 */
const throttlingMiddleware = (maxRequests: number, period: number) => {

    const checkRequestValidity = async (redis: any, { ipAddress, timestamp, count }: DataStored) => {
        const now = new Date();
        const timestampDate = new Date(Number(timestamp));
    
        if(count > maxRequests) {
            throw new TooManyRequests("Too many requests. Please try again later.");
        } else if(now.getTime() - timestampDate.getTime() < period) {
            redis.hSet(ipAddress, {
                ipAddress: ipAddress,
                timestamp: now.getTime().toString(),
                count: count + 1,
            });
        }
    }

    return async (req: NextRequest, requestData: RequestData) => {
        const redis = await getRedisClient();
        if(redis === null) return false;

        const ipAddress: string = requestData.getProperty('ipAddress');
    
        if(await redis.exists(ipAddress)) {
            const redisData = await redis.hGetAll(ipAddress);
            const data: DataStored = {
                ipAddress: redisData.ipAddress ?? '',
                timestamp: redisData.timestamp ?? '',
                count: Number(redisData.count) ?? 0,
            };
    
            await checkRequestValidity(redis, data);
        } else {
            redis.hSet(ipAddress, {
                ipAddress: ipAddress,
                timestamp: new Date().getTime().toString(),
                count: 1,
            })
            redis.expire(ipAddress, period / 1000);
        }
    }
    
}

export default throttlingMiddleware;