import { Request, Response, NextFunction } from 'express';
import Product, { ProductModel } from '../models/product';

export async function getProducts(req: Request, res: Response) {
    try {
        const products = await Product.find({}).exec();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//Gets the product
export async function getProduct(req: Request, res: Response) {
    try {
        const product = await Product.findOne({ productId: req.params.id }).exec();
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//Creates a new product
export async function createProduct(req: Request, res: Response) {
    try {
        let product = await Product.create(req.body);

        res.status(201).json(product);
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//Updates a product with the same ID
export async function updateProduct(req: Request, res: Response) {
    try {
        const result = await Product.updateOne({ productId: req.params.id }, req.body);
        if (result.n > 0) {
            if (result.nModified > 0)
                res.status(200).json(req.body);
            else
                res.status(304).json(req.body);
        }
        else
            res.status(404).json({ message: 'Product not found' });
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//Deletes a product with the same ID
export async function deleteProduct(req: Request, res: Response) {
    try {
        const result_ = await Product.deleteOne({ productId: req.params.id }).exec();
        const result = (result_ as unknown as { ok: number, n: number, deletedCount: number }) ?? { ok: 0, n: 0, deletedCount: 0 };


        if (result?.n > 0) {
            if (result?.deletedCount > 0)
                res.status(200).json({ message: 'Product deleted' });
            else {
                console.trace('STATUS 500 ON DELETE: ', result);
                res.status(404).json({ message: 'Product not found' });
            }
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({error, message: 'Internal server error' });
    }
}