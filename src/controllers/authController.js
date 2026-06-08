// ============================================
// CONTROLLER DE AUTENTICAÇÃO
// ============================================

import prisma from '../config/prisma.js'

// ---- REGISTRO ----
export async function registrar(req, res) {
    try {
        const { nome, email, senha } = req.body

        // validar campos
        if (!nome || !email || !senha) {
            return res.status(400).json({
                erro: 'Todos os campos são obrigatórios'
            })
        }

        // verificar email existente
        const usuarioExistente = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (usuarioExistente) {
            return res.status(409).json({
                erro: 'Este email já está cadastrado'
            })
        }

        // criar usuário
        const novoUsuario = await prisma.user.create({
            data: {
                name: nome,
                email: email,
                password: senha
            }
        })

        return res.status(201).json({
            mensagem: 'Conta criada com sucesso!',
            usuario: {
                id: novoUsuario.id,
                nome: novoUsuario.name,
                email: novoUsuario.email
            }
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            erro: 'Erro interno no servidor'
        })
    }
}

// ---- LOGIN ----
export async function login(req, res) {
    try {
        const { email, senha } = req.body

        // validar campos
        if (!email || !senha) {
            return res.status(400).json({
                erro: 'Email e senha são obrigatórios'
            })
        }

        // procurar usuário
        const usuario = await prisma.user.findUnique({
            where: {
                email
            }
        })

        // usuário não encontrado
        if (!usuario) {
            return res.status(401).json({
                erro: 'Email ou senha incorretos'
            })
        }

        // senha incorreta
        if (usuario.password !== senha) {
            return res.status(401).json({
                erro: 'Email ou senha incorretos'
            })
        }

        // login OK
        return res.status(200).json({
            mensagem: 'Login realizado com sucesso!',
            usuario: {
                id: usuario.id,
                nome: usuario.name,
                email: usuario.email
            }
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            erro: 'Erro interno no servidor'
        })
    }
}