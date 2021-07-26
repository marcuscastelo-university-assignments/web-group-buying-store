import * as categoryController from '../controllers/category-controller';
import { Router } from 'express';

const router = Router();

router.get('/', categoryController.getCategories)

export default router;