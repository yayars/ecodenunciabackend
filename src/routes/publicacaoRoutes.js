import { Router } from 'express';
import * as controller from '../controllers/publicacaoController.js';

const router = Router();

router.post('/publicacao', controller.create);
router.get('/publicacao', controller.getAll);
router.post('/publicacao/:id/like', controller.like);
router.patch('/publicacao/:id', controller.update);
router.delete('/publicacao/:id', controller.remove);

export default router;