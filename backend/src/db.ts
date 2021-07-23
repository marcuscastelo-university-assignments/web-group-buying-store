import dotenv from 'dotenv';
import mongoose from 'mongoose';
import winston from 'winston';

let connection: typeof mongoose | null = null;

export const getDB = async () => {
    //Load .env info
    dotenv.config();
    const { DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

    //If any of the database variables are undefined, print and error message
    if (!DB_USER || !DB_PASSWORD || !DB_DATABASE)
        return [ null, 'DB_USER, DB_PASSWORD, and/or DB_DATABASE are not defined in .env!' ];

    if (!connection) {
        //Connect to the database
        const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qxjks.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`;

        try {
            connection = await mongoose.connect(DB_CONNECTION_STRING, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } catch (error) {
            if (error instanceof Error)
                return [ null, error.message ];
            else if (error instanceof Object)
                return [ null, (error as Object).toString()];
            else return [ null, error ];
        }
    }
    return [ connection, null ];
}