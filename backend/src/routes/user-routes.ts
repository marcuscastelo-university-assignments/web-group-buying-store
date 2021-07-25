import * as userController from '../controllers/user-controller';
import { Router } from 'express';

const router = Router();

//GET, POST, PUT, DELETE for /user/:id
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;