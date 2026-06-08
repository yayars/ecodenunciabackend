import prisma from '../config/prisma.js';

export async function create(data) {
  return prisma.publicacao.create({ data });
}

export async function getAll() {
  return prisma.publicacao.findMany({
    orderBy: { criadoEm: 'desc' },
    include: {
      user: {
        select: {
          name: true
        }
      }
    }
  });
}

export async function like(id) {
  return prisma.publicacao.update({
    where: { id: Number(id) },
    data: { likes: { increment: 1 } }
  });
}

export async function update(id, data) {
  return prisma.publicacao.update({ where: { id: Number(id) }, data });
}

export async function remove(id) {
  return prisma.publicacao.delete({ where: { id: Number(id) } });
}