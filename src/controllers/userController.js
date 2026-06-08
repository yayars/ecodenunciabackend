// ============================================
// CONTROLLER DE USUÁRIO (CRUD)
// Recebe as requisições e devolve as respostas.
// ============================================

import * as UserService from '../services/userService.js';

// Criar um novo usuário
export async function createUser(req, res) {
    try {
        const { email, name, password } = req.body

        if (!email || !name || !password) {
            return res.status(400).json({ message: "Campos obrigatórios: name, email, password" })
        }

        const existUser = await UserService.getByEmail(email)

        if (existUser) {
            return res.status(409).json({ message: "Email já em uso!" })
        }

        const user = await UserService.create({ email, name, password })

        return res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

// Buscar um usuário pelo ID
export async function getUserById(req, res) {
    try {
        const { id } = req.params
        const user = await UserService.getById(id)

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado!" });
        }

        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

// Listar todos os usuários
export async function getAll(req, res) {
    try {
        const users = await UserService.get()
        return res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

// Atualizar um usuário
export async function updateUser(req, res) {
    try {
        const { id } = req.params
        const existUser = await UserService.getById(id)

        if (!existUser) {
            return res.status(404).json({ message: "Usuário não encontrado!" });
        }

        const user = await UserService.update(req.body, id)

        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

// Deletar um usuário
export async function deleteUser(req, res) {
    try {
        const { id } = req.params
        const existUser = await UserService.getById(id)

        if (!existUser) {
            return res.status(404).json({ message: "Usuário não encontrado!" });
        }

        const user = await UserService.remove(id)

        return res.status(200).json({ message: "Usuário deletado com sucesso!", user })
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}