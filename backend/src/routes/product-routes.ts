import * as productController from '../controllers/product-controller';
import * as commentController from '../controllers/comment-controller';

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

//GET, POST, PUT, DELETE for /:id/milestone/:mid
router.get('/:id/milestone/:mid', (req, res) => {
    res.json({ message: `GET /product/${req.params.id}/milestone/${req.params.mid}`});
});

router.post('/:id/milestone/:mid', (req, res) => {
    res.json({ message: `POST /product/${req.params.id}/milestone/${req.params.mid}`});
});

router.put('/:id/milestone/:mid', (req, res) => {
    res.json({ message: `PUT /product/${req.params.id}/milestone/${req.params.mid}`});
});

router.delete('/:id/milestone/:mid', (req, res) => {
    res.json({ message: `DELETE /product/${req.params.id}/milestone/${req.params.mid}`});
});

export default router;