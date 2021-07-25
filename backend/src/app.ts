import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { getDB } from './db';

import productRouter from './routes/product-routes';
import userRouter from './routes/user-routes';

async function main() {
    const [ connection, error ] = await getDB();

    if (error) {
        console.error('Error connecting to database:', error);
        return;
    }

    //Create the app in express
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use('/api/product', productRouter);
    app.use('/api/user', userRouter);

    app.use(express.static('html'));



    app.listen(3333, () => {
        console.log('Listening on port 3333');
    });
}

main();