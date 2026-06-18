# 🎬 App Filmes - Back-End

API REST desenvolvida em Node.js para gerenciamento de filmes.

O projeto fornece os endpoints necessários para cadastro, consulta, atualização e remoção de filmes, servindo como backend para a aplicação mobile App Filmes.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Dotenv
* Cors

---

## 📁 Estrutura do Projeto

```text
src/
├── controllers/
├── models/
├── routes/
└── server.js
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/igor-araujo-15/app-filmes-BACKEND.git
```

Acesse a pasta:

```bash
cd app-filmes-BACKEND
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env`:

```env
MONGO_URI=sua_string_de_conexao
PORT=3000
```

Inicie o servidor:

```bash
npm start
```

---

## 🔗 Endpoints

### Listar filmes

```http
GET /filmes
```

### Buscar filme por ID

```http
GET /filmes/:id
```

### Cadastrar filme

```http
POST /filmes
```

### Atualizar filme

```http
PUT /filmes/:id
```

### Excluir filme

```http
DELETE /filmes/:id
```

---

## 📱 Integração

Esta API é utilizada pelo aplicativo mobile App Filmes.

Repositório do Front-End:

https://github.com/igor-araujo-15/app-filmes-FRONT-END

---

## 👨‍💻 Autor

Igor Alves

Projeto desenvolvido para fins acadêmicos na disciplina de Code Mobile - ADS.
