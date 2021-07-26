import { Request, Response, NextFunction } from 'express';
import Cart, { CartModel, CartProductModel } from '../models/cart';

export async function getCartProducts(req: Request, res: Response) {
    //Return all cart products where req.params.nick match cart's user's nick
    const cart = await Cart.findOne({ nick: req.params.nick }).exec();
    if (cart) {
        res.json(cart.products);
    } else {
        res.status(404).json({ message: 'Not found' });
    }
}

export async function addCartProduct(req: Request, res: Response) {
    //Update all cart products from req.body into the cart that matches req.params.nick

    let result = await Cart.updateOne(
        {
            nick: req.params.nick,
            "products.productId": req.params.productId
        },
        {
            $inc: {
                "products.$.quantity": 1
            }
        }
    ).exec();

    if (result.n === 0)
        result = await Cart.updateOne(
            {
                nick: req.params.nick,
                "products.productId": { $ne: req.body.productId }
            },
            {
                $push: {
                    products: [
                        { productId: req.params.productId, quantity: 1 }
                    ]
                }
            }
        ).exec();

    if (result.n === 0) {
        const cart = await Cart.create({
            nick: req.params.nick,
            products: [
                { productId: req.params.productId, quantity: 1 }
            ]
        });
        res.status(201).json(cart.products);
    }
    else if (result.nModified >= 0)
        res.status(200).json(req.body);
    else
        res.status(500).json({ message: 'Internal server error' });
}



export async function updateCartProducts(req: Request, res: Response) {
    //Update all cart products from req.body into the cart that matches req.params.nick
    const result = await Cart.updateOne(
        {
            nick: req.params.nick
        },
        {
            products: req.body
        }
    ).exec();

    if (result.n <= 0) {
        const cart = await Cart.create({
            nick: req.params.nick,
            products: req.body
        });
        res.status(201).json(cart.products);
    }
    else if (result.nModified >= 0)
        res.status(200).json(req.body);
    else
        res.status(500).json({ message: 'Internal server error' });
}

export async function clearCart(req: Request, res: Response) {
    //Delete all items (product) inside a cart that matches req.params.nick
    const result = await Cart.updateOne(
        {
            nick: req.params.nick
        },
        {
            products: []
        }
    ).exec();

    if (result.n <= 0)
        return res.status(404).json({ message: 'Not found' });
    else if (result.nModified >= 0)
        res.json([]);
    else
        res.status(500).json({ message: 'Internal server error' });
}


export async function deleteCartProduct(req: Request, res: Response) {
    //Delete an item (product) inside a cart that matches req.params.nick and has productId === req.params.productId
    const result = await Cart.updateOne(
        {
            nick: req.params.nick,
            products: {
                $elemMatch: {
                    productId: req.params.productId
                }
            }
        },
        {
            $pull: {
                products: {
                    productId: req.params.productId
                }
            }
        }
    ).exec();

    if (result.n <= 0)
        return res.status(404).json({ message: 'Not found' });
    else if (result.nModified >= 0)
        res.json({});
    else
        res.status(500).json({ message: 'Internal server error' });
}
