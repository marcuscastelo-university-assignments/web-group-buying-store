import User, { UserModel } from '../models/user';
import { Router } from 'express';

const router = Router();

//GET, POST, PUT, DELETE for /user/:id
router.post('/login', async (req, res) => { //when the user wants to login
    if (!req.body.nick || !req.body.password)   //check if there's anything type in nick and password
        return res.status(400).json({ message: 'Please send a json with a nick and password' });

    try {
        const user = await User.findOne({   //search by the user and password in database
            nick: req.body.nick,
            password: req.body.password
        });
        if (!user) {    //if can't login
            return res.status(401).json({ message: 'Wrong user or password' });
        } else return res.status(200).json(user);   //login
    } catch (error) {
       return res.status(500).json({error, message: 'Internal server error'});
    }
});

router.post('/register', async (req, res) => {  //when creating a new account
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);  //user created
    } catch (error) {
        if (error.code === 11000) { //check if it already exists
            return res.status(409).json({error, message: 'User already exists'});
        }

        return res.status(500).json({error, message: 'Internal server error'});
    }
});

export default router;