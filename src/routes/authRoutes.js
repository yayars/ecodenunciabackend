// ============================================
// ROTAS DE AUTENTICAÇÃO (LOGIN E REGISTRO)
// Define os caminhos (URLs) que o frontend vai chamar
// ============================================

import { Router } from 'express';
import { login, registrar } from '../controllers/authController.js';

const router = Router();

// POST /api/auth/registrar -> cria uma conta nova
router.post('/api/auth/registrar', registrar);

// POST /api/auth/login -> faz login
router.post('/api/auth/login', login);

export default router;
