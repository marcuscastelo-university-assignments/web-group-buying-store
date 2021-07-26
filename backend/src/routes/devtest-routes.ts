import { NextFunction, Request, Response, Router } from 'express';

import Product, { ProductModel } from '../models/product';
import User, { UserModel } from '../models/user';
import Cart, { CartModel, CartProductModel } from '../models/cart';
import { genMockProducts } from '../util/mock-products';
import { genMockUsers } from '../util/mock-users';



const router = Router();

async function clearProducts(req: Request, res: Response, next: NextFunction) {
    await Product.deleteMany({}).exec();
    next();
}

async function clearUsers(req: Request, res: Response, next: NextFunction) {
    await User.deleteMany({}).exec();
    next();
}

async function clearCarts(req: Request, res: Response, next: NextFunction) {
    await Cart.deleteMany({}).exec();
    next();
}

async function clearAll(req: Request, res: Response, next: NextFunction) {
    clearCarts(req, res, () => {
        clearProducts(req, res, () => {
            clearUsers(req, res, () => {
                if (next) return next();
                else return res.status(200).json({ message: "Ok" });
            });
        });
    });
}

async function resetMockProducts(req: Request, res: Response, next: NextFunction) {
    clearProducts(req, res, async () => {
        try {
            return res.json(await Product.create(genMockProducts()));
        } catch (error) {
            return res.status(500).json({ error, message: "Internal Server Error" });
        }
    });
}

async function resetMockUsers(req: Request, res: Response, next: NextFunction) {
    clearUsers(req, res, async () => {
        try {
            return res.json(await User.create(genMockUsers()))
        } catch (error) {
            return res.status(500).json({ error, message: "Internal Server Error" });
        }
    });
}

router.get('/reset-mock-products', resetMockProducts);
router.get('/reset-mock-users', resetMockUsers);
router.get('/clear-carts', clearCarts);
router.get('/clear-users', clearUsers);
router.get('/clear-products', clearProducts);
router.get('/clear-all', clearAll);


export default router;