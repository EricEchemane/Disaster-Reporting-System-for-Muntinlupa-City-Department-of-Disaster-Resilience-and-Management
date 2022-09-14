import Caller from "entities/caller.entity";
import { RequestError } from "http_adapters/response-normalizer";
import mongoose from "mongoose";

type DB = typeof mongoose & {
    models: {
        Caller: typeof Caller;
    };
};

let db: DB;

export default async function connectToDatabase() {
    if (db) return db;

    const uri = process.env.MONGODB_URI;
    if (!uri) throw new RequestError(500, "No MongoDB URI found");

    db = await mongoose.connect(uri) as DB;
    return db;
}