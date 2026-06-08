import prisma from '../config/prisma.js'

// criar usuario novo
export async function create(dados) {
    const novoUsuario = await prisma.user.create({
        data: {
            name: dados.name || dados.nome,
            email: dados.email,
            password: dados.password || dados.senha
        }
    })

    return novoUsuario
}

// buscar por id
export async function getById(id) {
    const usuario = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    })

    return usuario
}

// buscar por email
export async function getByEmail(email) {
    const usuario = await prisma.user.findUnique({
        where: {
            email
        }
    })

    return usuario
}

// buscar todos
export async function get() {
    return await prisma.user.findMany()
}

// atualizar usuario
export async function update(dados, id) {
    const usuario = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name: dados.name || dados.nome,
            email: dados.email,
            password: dados.password || dados.senha
        }
    })

    return usuario
}

// deletar usuario
export async function remove(id) {
    const usuario = await prisma.user.delete({
        where: {
            id: Number(id)
        }
    })

    return usuario
}