// ============================================
// ROTAS DE USUÁRIO (CRUD)
// ============================================

import { Router } from 'express';
import * as UserController from '../controllers/userController.js';

const router = Router();

// POST   /user      -> criar usuário
router.post('/user', UserController.createUser);

// GET    /user      -> listar todos
router.get('/user', UserController.getAll);

// GET    /user/:id  -> buscar por ID
router.get('/user/:id', UserController.getUserById);

// PATCH  /user/:id  -> atualizar
router.patch('/user/:id', UserController.updateUser);

// DELETE /user/:id  -> deletar
router.delete('/user/:id', UserController.deleteUser);

export default router;