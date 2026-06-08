import * as service from '../services/publicacaoService.js';

export async function create(req, res) {
  try {
    const pub = await service.create(req.body);
    res.status(201).json(pub);
  } catch (e) { res.status(500).json({ error: e.message }); }
}

export async function getAll(req, res) {
  try {
    const pubs = await service.getAll();
    res.json(pubs);
  } catch (e) { res.status(500).json({ error: e.message }); }
}

export async function like(req, res) {
  try {
    const pub = await service.like(req.params.id);
    res.json(pub);
  } catch (e) { res.status(500).json({ error: e.message }); }
}

export async function update(req, res) {
  try {
    const pub = await service.update(req.params.id, req.body);
    res.json(pub);
  } catch (e) { res.status(500).json({ error: e.message }); }
}

export async function remove(req, res) {
  try {
    await service.remove(req.params.id);
    res.json({ message: "Deletado" });
  } catch (e) { res.status(500).json({ error: e.message }); }
}