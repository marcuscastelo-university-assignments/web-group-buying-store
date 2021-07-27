import * as categoryController from '../controllers/category-controller';
import { Router } from 'express';

const router = Router();

//just to get the category
router.get('/', categoryController.getCategories)

export default router;