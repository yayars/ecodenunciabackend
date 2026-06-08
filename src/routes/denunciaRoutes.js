// ============================================
// ROTAS DE DENÚNCIA (CRUD)
// ============================================

import { Router } from 'express';
import * as DenunciaController from '../controllers/denunciaController.js';

const router = Router();

// POST   /denuncia      -> criar denúncia
router.post('/denuncia', DenunciaController.createDenuncia);

// GET    /denuncia      -> listar todas
router.get('/denuncia', DenunciaController.getAllDenuncias);

// GET    /denuncia/:id  -> buscar por ID
router.get('/denuncia/:id', DenunciaController.getDenunciaById);

// PATCH  /denuncia/:id  -> atualizar
router.patch('/denuncia/:id', DenunciaController.updateDenuncia);

// DELETE /denuncia/:id  -> deletar
router.delete('/denuncia/:id', DenunciaController.deleteDenuncia);

export default router;
