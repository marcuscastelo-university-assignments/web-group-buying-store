import { Router } from 'express';
import * as cartController from '../controllers/cart-controller'

const router = Router();

router.get('/:nick', cartController.getCartProducts);
router.put('/:nick', cartController.updateCartProducts);
router.put('/:nick/:productId', cartController.addCartProduct);
router.delete('/:nick/clear', cartController.clearCart);
router.delete('/:nick/:productId', cartController.deleteCartProduct);

export default router;