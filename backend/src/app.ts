import express from 'express';
import mongoose from 'mongoose';

import { getDB } from './db';

import productRouter from './routes/product-routes';

async function main() {
    const [ connection, error ] = await getDB();

    if (error) {
        console.error('Error connecting to database:', error);
        return;
    }

    //Create the app in express
    const app = express();

    // app.use(cors());
    app.use(express.json());

    app.use('/product', productRouter);

    app.use(express.static('html'));



    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
}

main();