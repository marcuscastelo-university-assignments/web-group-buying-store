import * as productController from '../controllers/product-controller';
import * as commentController from '../controllers/comment-controller';
import * as milestoneController from '../controllers/milestone-controller';

import { NextFunction, Response, Request, Router } from 'express';
import { isAdmin, isAuth } from '../controllers/user-controller';
import User, { UserModel } from '../models/user';

const router = Router();

/**
 * Routes for products, allowing GET, POST, PUT, DELETE
 * on 'product' model (acts on product, product comments and product milestones)
 */

const isSelf = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ nick: req.params.nick }).exec();
    if (req.body.creator === user?.nick || req.body.author === user?.nick) return next();
    else return res.status(401).json({ message: "Not authorized" });
}

const isSelfOrAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ nick: req.params.nick }).exec();
    if (user?.admin) return next();
    else return isSelf(req, res, next);
};

//GET, POST, PUT, DELETE for /:id
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.post('/', isAuth, productController.createProduct);
router.put('/:id', isAuth, isSelf, productController.updateProduct);
router.delete('/:id', isAuth, isSelfOrAdmin, productController.deleteProduct);

//GET, POST, PUT, DELETE for /:id/comments/:cid
router.get('/:id/comment', commentController.getComments);
router.get('/:id/comment/:cid', commentController.getComment);
router.post('/:id/comment', isAuth, commentController.createComment);
router.put('/:id/comment/:cid', isAuth, isSelf, commentController.updateComment);
router.delete('/:id/comment/:cid', isAuth, isSelfOrAdmin, commentController.deleteComment);

//GET, POST, PUT, DELETE for /:id/milestone/:mqty
router.get('/:id/milestone', milestoneController.getMilestones);
router.get('/:id/milestone/:mqty', milestoneController.getMilestone);
router.post('/:id/milestone', isAuth, isSelf, milestoneController.createMilestone);
router.put('/:id/milestone/:mqty', isAuth, isSelf,  milestoneController.updateMilestone);
router.delete('/:id/milestone/:mqty', isAuth, isSelf, milestoneController.deleteMilestone);

export default router;