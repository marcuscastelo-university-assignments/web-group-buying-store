import * as productController from '../controllers/product-controller';
import * as commentController from '../controllers/comment-controller';
import * as milestoneController from '../controllers/milestone-controller';

import { Router } from 'express';

const router = Router();

/**
 * Routes for products, allowing GET, POST, PUT, DELETE
 * on 'product' model (acts on product, product comments and product milestones)
 */

//GET, POST, PUT, DELETE for /:id
router.get('/', productController.getProducts)
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);


//GET, POST, PUT, DELETE for /:id/comments/:cid
router.get('/:id/comment', commentController.getComments);
router.get('/:id/comment/:cid', commentController.getComment);
router.post('/:id/comment', commentController.createComment);
router.put('/:id/comment/:cid', commentController.updateComment);
router.delete('/:id/comment/:cid', commentController.deleteComment);

//GET, POST, PUT, DELETE for /:id/milestone/:mqty
router.get('/:id/milestone', milestoneController.getMilestones);
router.get('/:id/milestone/:mqty', milestoneController.getMilestone);
router.post('/:id/milestone', milestoneController.createMilestone);
router.put('/:id/milestone/:mqty', milestoneController.updateMilestone);
router.delete('/:id/milestone/:mqty', milestoneController.deleteMilestone);




export default router;