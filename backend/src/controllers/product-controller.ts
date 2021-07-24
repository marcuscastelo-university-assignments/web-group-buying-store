import { Request, Response, NextFunction } from 'express';
import Product from '../models/product';

export async function getProduct(req: Request, res: Response) {
    try {
        const product = Product.findOne({
            where: {
                productId: req.params.id
            }
        });

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function createProduct(req: Request, res: Response) {
    try {
        //TODO: continuar
        let product = await Product.create({
            
        });

        product.save();

    }
    catch (error) {
        console.trace(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}