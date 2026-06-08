# 🚀 Express + Prisma v6 Backend

Este é um projeto de estudo utilizando **Express** em Node.js com **Prisma ORM (v6)** e banco de dados **MySQL**.

---

## 🛠️ Instalação

### Clone o repositório:

```bash
git clone <url-do-repositorio>
cd backend
```

### Instale as dependências:

```bash
npm install
```

### Suba o banco de dados (Docker):

```bash
docker-compose up -d
```

### Gere o Prisma Client e rode as migrations:

```bash
npx prisma generate
npx prisma migrate dev --name init_database
```

---

## ⚙️ Configuração (.env)

Crie um arquivo `.env` na raiz do projeto e configure a URL de conexão com o banco MySQL:

```env
DATABASE_URL="mysql://prisma_user:prisma_password@localhost:3306/meu_banco"
PORT=3000
```

---

## 🛣️ Endpoints da API

| Método   | Endpoint    | Descrição                                                                 |
|----------|-------------|---------------------------------------------------------------------------|
| `POST`   | `/user`     | Cria um novo usuário. Requer `email`, `name` e `password` no corpo (JSON).|
| `GET`    | `/user`     | Retorna uma lista com todos os usuários cadastrados.                      |
| `GET`    | `/user/:id` | Retorna os detalhes de um usuário específico pelo ID.                     |
| `PATCH`  | `/user/:id` | Atualiza dados parciais de um usuário existente.                          |
| `DELETE` | `/user/:id` | Remove um usuário do sistema permanentemente.                             |

---

## 🐾 Coleção Bruno

O projeto inclui uma coleção **[Bruno](https://www.usebruno.com/)** para testar os endpoints da API diretamente, sem precisar configurar nada manualmente.

### Como usar:

1. Instale o Bruno: [usebruno.com](https://www.usebruno.com/)
2. Abra o Bruno e clique em **Open Collection**
3. Selecione a pasta `Backend` do repositório

A coleção já vem configurada com a variável `base_url` apontando para `http://localhost:3000` e inclui as seguintes requisições prontas:

| # | Nome            | Método   | Endpoint    | Body (exemplo)                                              |
|---|-----------------|----------|-------------|-------------------------------------------------------------|
| 1 | Create User     | `POST`   | `/user`     | `{ "name": "...", "email": "...", "password": "..." }`      |
| 2 | Get Users       | `GET`    | `/user`     | —                                                           |
| 3 | Get User By ID  | `GET`    | `/user/1`   | —                                                           |
| 4 | Update User     | `PATCH`  | `/user/1`   | `{ "name": "..." }`                                         |
| 5 | Delete User     | `DELETE` | `/user/1`   | —                                                           |

---

## ▶️ Como rodar o projeto

```bash
node src/server.js
```

O servidor estará disponível em: [http://localhost:3000](http://localhost:3000)