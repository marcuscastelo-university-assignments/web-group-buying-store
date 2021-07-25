import * as userController from '../controllers/user-controller';
import { Router } from 'express';

const router = Router();

//GET, POST, PUT, DELETE for /user/:id
router.get('/', userController.getUsers);
router.get('/:nick', userController.getUser);
router.post('/', userController.createUser);
router.put('/:nick', userController.updateUser);
router.delete('/:nick', userController.deleteUser);

export default router;