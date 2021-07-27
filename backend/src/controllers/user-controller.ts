import { Request, Response, NextFunction } from 'express';
import User, { UserModel } from '../models/user';

//get all the users
export async function getUsers(req: Request, res: Response) {
    try {
        const users = await User.find({}).exec();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//get a user by his nickname
export async function getUser(req: Request, res: Response) {
    try {
        const user = await User.findOne({ nick: req.params.nick }).exec();
        if (user) {
            user.password = '-?-secret-?-'  //return a secret password to don't show the real one
            res.status(200).json(user); //in case worked
        } else {    //if not
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//when creating new user
export async function createUser(req: Request, res: Response) {
    try {
        const userDocument: Partial<UserModel> = {
            ...req.body,    //take the data
            admin: false,   //admins are created in the application, you can't create one by accessing the site
        };

        let user = await User.create(userDocument); //create the user

        await user.save();  //saving in db...

        res.status(201).json(user); //if it's ok
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//change the body of the user, nick, email...
export async function updateUser(req: Request, res: Response) {
    try {
        const result = await User.updateOne({ nick: req.params.nick }, req.body);
        if (result.n > 0) {
            if (result.nModified > 0)   //if the body was modified
                res.status(200).json(req.body);
            else    //if it wasan't
                res.status(304).json(req.body);
        }
        else
            res.status(404).json({ message: 'User not found' });
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//deleting a user by nickname
export async function deleteUser(req: Request, res: Response) {
    try {
        const result_ = await User.deleteOne({ nick: req.params.nick }).exec();
        const result = (result_ as unknown as { ok: number, n: number, deletedCount: number }) ?? { ok: 0, n: 0, deletedCount: 0 };
        if (result?.n > 0) {
            if (result?.deletedCount > 0)
                res.status(200).json({ message: 'User deleted' });
            else {  //if the user was found but can't deleted
                console.trace('STATUS 500 ON DELETE: ', result);
                res.status(404).json({ message: 'User not found' });
            }
        } else {    //if the user was not found
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        console.trace(error);
        res.status(500).json({error, message: 'Internal server error' });
    }
}

//checks if the user is logged in
export async function isAuth(req: Request, res: Response, next: NextFunction) {
    const user = await User.findOne({ nick: req.params.nick }).exec();
    if ((user?.nick === req.cookies.nick && user?.password === req.cookies.password)) return next();
    else return res.status(401).json({message: "Not authorized"});
}

//checs if the admin is logged in
export async function isAdmin(req: Request, res: Response, next: NextFunction) {
    isAuth(req, res, async _ => {
        const user = await User.findOne({ nick: req.params.nick }).exec();
        if (user?.admin) return next(user);
        else return res.status(401).json({message: "Not authorized"});
    })
}