import User, { UserModel } from '../models/user';
import { Router } from 'express';

const router = Router();

//GET, POST, PUT, DELETE for /user/:id
router.post('/login', async (req, res) => {
    if (!req.body.nick || !req.body.password)
        return res.status(400).json({ message: 'Please send a json witha nick and password' });

    try {
        const user = await User.findOne({
            nick: req.body.nick,
            password: req.body.password
        });
        if (!user) {
            return res.status(401).json({ message: 'Wrong user or password' });
        } else return res.status(200).json(user);
    } catch (error) {
       return res.status(500).json({error, message: 'Internal server error'});
    }
});

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({error, message: 'User already exists'});
        }

        return res.status(500).json({error, message: 'Internal server error'});
    }
});

export default router;