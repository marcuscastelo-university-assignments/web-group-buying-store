import { Request, Response, NextFunction } from 'express';
import User, { UserModel } from '../models/user';

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await User.find({}).exec();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        const user = await User.findOne({ userId: req.params.id }).exec();
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const userDocument: Partial<UserModel> = req.body;

        let user = await User.create(userDocument);

        await user.save();

        res.status(201).json(user);
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function updateUser(req: Request, res: Response) {
    try {
        const result = await User.updateOne({ userId: req.params.id }, req.body);
        if (result.n > 0) {
            if (result.nModified > 0)
                res.status(200).json(req.body);
            else
                res.status(304).json(req.body);
        }
        else
            res.status(404).json({ message: 'User not found' });
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        const result_ = await User.deleteOne({ userId: req.params.id }).exec();
        const result = (result_ as unknown as { ok: number, n: number, deletedCount: number }) ?? { ok: 0, n: 0, deletedCount: 0 };
        if (result?.n > 0) {
            if (result?.deletedCount > 0)
                res.status(200).json({ message: 'User deleted' });
            else {
                console.trace('STATUS 500 ON DELETE: ', result);
                res.status(500).json({ message: 'Internal server error' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
