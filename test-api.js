// ============================================
// SCRIPT DE TESTE - TESTA TODOS OS CRUDs
// Execute com: node test-api.js
// (O servidor precisa estar rodando)
// ============================================

const BASE = 'http://localhost:3000';

async function testar() {

    // ==========================================
    // CRUD DE USUÁRIO
    // ==========================================
    console.log('========================================');
    console.log('       CRUD DE USUÁRIO');
    console.log('========================================');

    // CREATE
    console.log('\n--- POST /user (Criar) ---');
    const res1 = await fetch(`${BASE}/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Carlos', email: 'carlos@email.com', password: 'senha123' })
    });
    console.log('Status:', res1.status);
    console.log('Resposta:', await res1.json());

    // READ ALL
    console.log('\n--- GET /user (Listar todos) ---');
    const res2 = await fetch(`${BASE}/user`);
    console.log('Status:', res2.status);
    console.log('Resposta:', await res2.json());

    // READ BY ID
    console.log('\n--- GET /user/1 (Buscar por ID) ---');
    const res3 = await fetch(`${BASE}/user/1`);
    console.log('Status:', res3.status);
    console.log('Resposta:', await res3.json());

    // READ BY ID (não existe)
    console.log('\n--- GET /user/999 (ID inexistente) ---');
    const res3b = await fetch(`${BASE}/user/999`);
    console.log('Status:', res3b.status);
    console.log('Resposta:', await res3b.json());

    // UPDATE
    console.log('\n--- PATCH /user/1 (Atualizar) ---');
    const res4 = await fetch(`${BASE}/user/1`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: 'Ana Maria' })
    });
    console.log('Status:', res4.status);
    console.log('Resposta:', await res4.json());

    // DELETE
    console.log('\n--- DELETE /user/1 (Deletar) ---');
    const res5 = await fetch(`${BASE}/user/1`, { method: 'DELETE' });
    console.log('Status:', res5.status);
    console.log('Resposta:', await res5.json());

    // DELETE (não existe)
    console.log('\n--- DELETE /user/999 (ID inexistente) ---');
    const res5b = await fetch(`${BASE}/user/999`, { method: 'DELETE' });
    console.log('Status:', res5b.status);
    console.log('Resposta:', await res5b.json());


    // ==========================================
    // CRUD DE DENÚNCIA
    // ==========================================
    console.log('\n\n========================================');
    console.log('       CRUD DE DENÚNCIA');
    console.log('========================================');

    // CREATE
    console.log('\n--- POST /denuncia (Criar) ---');
    const res6 = await fetch(`${BASE}/denuncia`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            tipo: 'Queima de lixo',
            descricao: 'Estão queimando lixo no terreno baldio',
            local: 'Rua Ipiranga, 456 - Vila Nova',
            nome: 'Carlos',
            email: 'carlos@email.com',
            anonimo: false
        })
    });
    console.log('Status:', res6.status);
    console.log('Resposta:', await res6.json());

    // CREATE (sem campos obrigatórios)
    console.log('\n--- POST /denuncia (Sem campos) ---');
    const res6b = await fetch(`${BASE}/denuncia`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo: 'Queima de lixo' })
    });
    console.log('Status:', res6b.status);
    console.log('Resposta:', await res6b.json());

    // READ ALL
    console.log('\n--- GET /denuncia (Listar todas) ---');
    const res7 = await fetch(`${BASE}/denuncia`);
    console.log('Status:', res7.status);
    const denuncias = await res7.json();
    console.log('Total:', denuncias.length, 'denúncias');
    console.log('Resposta:', denuncias);

    // READ BY ID
    console.log('\n--- GET /denuncia/1 (Buscar por ID) ---');
    const res8 = await fetch(`${BASE}/denuncia/1`);
    console.log('Status:', res8.status);
    console.log('Resposta:', await res8.json());

    // UPDATE
    console.log('\n--- PATCH /denuncia/1 (Atualizar) ---');
    const res9 = await fetch(`${BASE}/denuncia/1`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao: 'Descrição atualizada - lixo removido' })
    });
    console.log('Status:', res9.status);
    console.log('Resposta:', await res9.json());

    // DELETE
    console.log('\n--- DELETE /denuncia/2 (Deletar) ---');
    const res10 = await fetch(`${BASE}/denuncia/2`, { method: 'DELETE' });
    console.log('Status:', res10.status);
    console.log('Resposta:', await res10.json());

    // DELETE (não existe)
    console.log('\n--- DELETE /denuncia/999 (ID inexistente) ---');
    const res10b = await fetch(`${BASE}/denuncia/999`, { method: 'DELETE' });
    console.log('Status:', res10b.status);
    console.log('Resposta:', await res10b.json());


    // ==========================================
    // AUTH (Login/Registro)
    // ==========================================
    console.log('\n\n========================================');
    console.log('       AUTH (LOGIN/REGISTRO)');
    console.log('========================================');

    // REGISTRO
    console.log('\n--- POST /api/auth/registrar ---');
    const res11 = await fetch(`${BASE}/api/auth/registrar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: 'Maria', email: 'maria@email.com', senha: '123456' })
    });
    console.log('Status:', res11.status);
    console.log('Resposta:', await res11.json());

    // LOGIN
    console.log('\n--- POST /api/auth/login ---');
    const res12 = await fetch(`${BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'joao@email.com', senha: 'abcdef' })
    });
    console.log('Status:', res12.status);
    console.log('Resposta:', await res12.json());

    console.log('\n\n========================================');
    console.log('  TODOS OS TESTES FINALIZADOS!');
    console.log('========================================');
}

testar().catch(err => console.error('Erro ao conectar:', err.message));
