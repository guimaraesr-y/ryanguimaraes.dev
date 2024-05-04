import mongoose from "mongoose";
import { config as dotenv } from "dotenv-safe";
dotenv();

export default class Database {

    private static _mongo = mongoose.connect(process.env.DATABASE_URL!);

    public static async connect(): Promise<typeof mongoose> {
        return await this._mongo;
    }

}