import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { getDB } from './db';

import productRouter from './routes/product-routes';
import userRouter from './routes/user-routes';
import categoryRouter from './routes/category-routes';
import cartRouter from './routes/cart-routes';
import authRouter from './routes/auth-routes';
import devRouter from './routes/devtest-routes';

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
    app.use(cookieParser());

    app.use('/api/product', productRouter);
    app.use('/api/user', userRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/cart', cartRouter);
    app.use('/api/auth', authRouter);
    //This route is used in development to reset database to a known state, this route should be disable on production
    app.use('/api/dev', devRouter);

    app.use(express.static('html'));

    app.listen(3333, () => {
        console.log('Listening on port 3333');
    });
}

main();