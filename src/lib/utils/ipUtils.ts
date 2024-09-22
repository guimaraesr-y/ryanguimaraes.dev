import { headers } from "next/headers";

class IpAddressUtils {

    public static getIpAddress() {
        return headers().get('x-forwarded-for') || '127.0.0.1';
    }

}

export default IpAddressUtils;