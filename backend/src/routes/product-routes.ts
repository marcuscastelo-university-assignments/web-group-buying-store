import * as controller from '../controllers/product-controller';

import { Router } from 'express';

const router = Router();

/**
 * Routes for products, allowing GET, POST, PUT, DELETE
 * on 'product' model (acts on product, product comments and product milestones)
 */

//GET, POST, PUT, DELETE for /:id
router.get('/:id', controller.getProduct);
router.post('/:id', controller.createProduct);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

//GET, POST, PUT, DELETE for /:id/comments/:cid
router.get('/:id/comment/:cid', (req, res) => {
    res.json({ message: `GET /product/${req.params.id}/comments/${req.params.cid}`});
})


router.post('/:id/comment/:cid', (req, res) => {
    res.json({ message: `POST /product/${req.params.id}/comments/${req.params.cid}`});
});

router.put('/:id/comment/:cid', (req, res) => {
    res.json({ message: `PUT /product/${req.params.id}/comments/${req.params.cid}`});
});

router.delete('/:id/comment/:cid', (req, res) => {
    res.json({ message: `DELETE /product/${req.params.id}/comments/${req.params.cid}`});
});

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