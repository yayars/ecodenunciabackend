// ============================================
// SERVIDOR PRINCIPAL
// Configura o Express e registra as rotas
// ============================================

import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import denunciaRoutes from './routes/denunciaRoutes.js';
import publicacaoRoutes from './routes/publicacaoRoutes.js';

const app = express();

// Permite que o frontend (rodando em outra porta) acesse o backend
app.use(cors());

// Permite receber dados em JSON no body das requisições
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Registrar as rotas
app.use(userRoutes);
app.use(authRoutes);
app.use(denunciaRoutes);
app.use(publicacaoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});