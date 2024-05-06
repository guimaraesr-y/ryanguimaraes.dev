import { createClient } from 'redis';

import { config as dotenv } from "dotenv-safe";
dotenv();

const REDIS_URL = process.env.REDIS_URL;

const getRedisClient = async () => {
    let client;

    if(process.env.NODE_ENV === 'production') {
        client = createClient({
            url: REDIS_URL,
        });
    } else {
        client = createClient();
    }

    // when listening for errors, redis will reconnect automatically
    // i don't want this to happen in production, cause it will run 
    // forever, slowing down the api

    // client.on('error', err => {
    //     console.error('Redis Client Error', err)
    // });
    
    try {
        const con = await client.connect();
        return con;
    } catch(err) {
        console.error(err)
        return null
    }
}

export default getRedisClient;