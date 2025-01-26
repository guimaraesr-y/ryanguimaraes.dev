import { headers } from "next/headers";

class IpAddressUtils {

    public static getIpAddress(): string {
        const cfConnectingIp = headers().get('CF-Connecting-IP');
        if (cfConnectingIp) {
            return cfConnectingIp;
        }

        const xForwardedFor = headers().get('x-forwarded-for');
        if (xForwardedFor) {
            return xForwardedFor;
        }

        return '127.0.0.1';
    }

}

export default IpAddressUtils;