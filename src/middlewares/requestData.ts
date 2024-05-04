export default class RequestData {
    
    private data: Record<string, any> = {};

    constructor() {}

    public getAll() {
        return this.data;
    }

    public getProperty(key: string) {
        return this.data[key];
    }

    public setProperty(key: string, value: any) {
        return this.data[key] = value;
    }

}