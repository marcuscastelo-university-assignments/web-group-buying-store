import { Request, Response, NextFunction } from 'express';
import Product, { ProductModel } from '../models/product';

export async function getProducts(req: Request, res: Response) {    //get all the products
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
        const product = await Product.findOne({ productId: req.params.id }).exec(); //find by id
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' }); //if it doesn't exists
        }
    }
    catch (error) {
        console.trace(error);   //debug
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//Creates a new product
export async function createProduct(req: Request, res: Response) {
    try {
        let product = await Product.create(req.body);   //saving the body of the product

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
        const result = await Product.updateOne({ productId: req.params.id }, req.body); //update by id
        if (result.n > 0) {
            if (result.nModified > 0)   //if the product was updated
                res.status(200).json(req.body);
            else    //if it's the same
                res.status(304).json(req.body);
        }
        else    //in case it can't find
            res.status(404).json({ message: 'Product not found' });
    }
    catch (error) { //debug
        console.trace(error);
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//Deletes a product with the same ID
export async function deleteProduct(req: Request, res: Response) {
    try {
        const result_ = await Product.deleteOne({ productId: req.params.id }).exec();   //delete by id
        const result = (result_ as unknown as { ok: number, n: number, deletedCount: number }) ?? { ok: 0, n: 0, deletedCount: 0 };


        if (result?.n > 0) {    
            if (result?.deletedCount > 0)   //if was deleted
                res.status(200).json({ message: 'Product deleted' });
            else {  //if the id was found but cant delete
                console.trace('STATUS 500 ON DELETE: ', result);
                res.status(404).json({ message: 'Product not found' });
            }
        } else {    //if the product was not finded
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({error, message: 'Internal server error' });
    }
}
