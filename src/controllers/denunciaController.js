// ============================================
// CONTROLLER DE DENÚNCIA (CRUD)
// Recebe as requisições e devolve as respostas.
// ============================================

import * as DenunciaService from '../services/denunciaService.js';

// Criar uma nova denúncia
export async function createDenuncia(req, res) {
    try {
        const { tipo, descricao, local } = req.body;
        console.log(req.body)

        // Verificar campos obrigatórios
        if (!tipo || !descricao || !local) {
            return res.status(400).json({
                message: "Campos obrigatórios: tipo, descricao, local"
            });
        }

        const denuncia = await DenunciaService.create(req.body);

        return res.status(201).json(denuncia);
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

// Buscar denúncia pelo ID
export async function getDenunciaById(req, res) {
    try {
        const { id } = req.params;
        const denuncia = await DenunciaService.getById(id);

        if (!denuncia) {
            return res.status(404).json({ message: "Denúncia não encontrada!" });
        }

        return res.status(200).json(denuncia);
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

// Listar todas as denúncias
export async function getAllDenuncias(req, res) {
    try {
        const denuncias = await DenunciaService.getAll();
        return res.status(200).json(denuncias);
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

// Atualizar uma denúncia
export async function updateDenuncia(req, res) {
    try {
        const { id } = req.params;
        const existe = await DenunciaService.getById(id);

        if (!existe) {
            return res.status(404).json({ message: "Denúncia não encontrada!" });
        }

        const denuncia = await DenunciaService.update(req.body, id);

        return res.status(200).json(denuncia);
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

// Deletar uma denúncia
export async function deleteDenuncia(req, res) {
    try {
        const { id } = req.params;
        const existe = await DenunciaService.getById(id);

        if (!existe) {
            return res.status(404).json({ message: "Denúncia não encontrada!" });
        }

        const denuncia = await DenunciaService.remove(id);

        return res.status(200).json({ message: "Denúncia deletada com sucesso!", denuncia });
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}
