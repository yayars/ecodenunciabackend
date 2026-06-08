import prisma from '../config/prisma.js'

// Criar uma nova denúncia
export async function create(dados) {
    const novaDenuncia = await prisma.denuncia.create({
        data: {
            tipo: dados.tipo,
            descricao: dados.descricao,
            local: dados.local,
            nome: dados.nome || '',
            email: dados.email || '',
            anonimo: dados.anonimo || false
        }
    })

    return novaDenuncia
}

// Buscar denúncia por ID
export async function getById(id) {
    const denuncia = await prisma.denuncia.findUnique({
        where: {
            id: Number(id)
        }
    })

    return denuncia
}

// Buscar todas as denúncias
export async function getAll() {
    return await prisma.denuncia.findMany()
}

// Atualizar uma denúncia
export async function update(dados, id) {
    const denuncia = await prisma.denuncia.update({
        where: {
            id: Number(id)
        },
        data: {
            tipo: dados.tipo,
            descricao: dados.descricao,
            local: dados.local,
            nome: dados.nome,
            email: dados.email,
            anonimo: dados.anonimo
        }
    })

    return denuncia
}

// Deletar uma denúncia
export async function remove(id) {
    const denuncia = await prisma.denuncia.delete({
        where: {
            id: Number(id)
        }
    })

    return denuncia
}