# Electron React Auth App

## 📋 Descrição

Este projeto é um aplicativo desktop construído com Electron e React que permite o cadastro e login de usuários, utilizando hashing de senhas com bcrypt e validação de credenciais no banco de dados MySQL.

O foco principal do projeto é aprender a manipular bancos de dados e compreender o fluxo completo de comunicação entre a interface do usuário (UI) e o backend (Main Process) via IPC (ipcMain e ipcRenderer).

Para organizar e simplificar as operações com o banco de dados, foi utilizado o padrão de facades, o que melhora a manutenção e escalabilidade do código.

Além disso, o projeto utiliza migrations, seeds e stubs do Knex.js para gerenciar a estrutura do banco e popular dados iniciais, garantindo um ambiente consistente para desenvolvimento e testes.

A segurança dos dados sensíveis, como as credenciais do banco, foi mantida utilizando o arquivo .env, evitando exposição direta de informações no código-fonte.

Para proteção das senhas dos usuários, foi implementado o hashing usando a biblioteca bcrypt, garantindo que as senhas nunca sejam armazenadas em texto puro.

A autorização das ações do usuário serão controladas via JWT (JSON Web Token), que valida as operações autorizadas a partir do token gerado no login, aumentando a segurança e a integridade da sessão.

A comunicação entre a UI e o backend é feita exclusivamente via IPC, com a camada de segurança reforçada pelo uso do preload.js e do contextBridge, evitando exposição direta das APIs do Node.js para o frontend.

Este projeto foi desenvolvido como parte das atividades do curso do Senac, com o objetivo de consolidar conhecimentos práticos em desenvolvimento de aplicativos desktop integrados com banco de dados.

---

## 🚀 Funcionalidades

✅ Formulário de **Login**  
✅ **Autenticação** de usuários com verificação de credenciais no MySQL  
✅ Cadastro de novos usuários com **senha hasheada**  
✅ Comunicação completa: **UI → IPC → Main → DB → Main → IPC → UI**  
✅ Interface protegida com **preload.js** para segurança  
✅ Interface estilizada com **React** e **styles.css**

---

## 🛠️ Tecnologias Utilizadas
![Electron](https://img.shields.io/badge/Electron-47848F?logo=electron&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white) ![Knex.js](https://img.shields.io/badge/Knex.js-6E3B6E?logo=knex&logoColor=white) ![mysql2](https://img.shields.io/badge/mysql2-4479A1?logo=mysql&logoColor=white) ![bcrypt](https://img.shields.io/badge/bcrypt-59A076?logo=node.js&logoColor=white) ![IPC](https://img.shields.io/badge/IPC-000000?style=flat&logo=electron&logoColor=white) ![preload.js](https://img.shields.io/badge/preload.js-007ACC?logo=javascript&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)


---

## 🗂️ Estrutura do Fluxo

![Editor _ Mermaid Chart-2025-05-28-011755](https://github.com/user-attachments/assets/5c54752c-751a-4e86-8c22-75d05c30526e)

## ⚙️ Como Rodar o Projeto

### ✅ Pré-requisitos

- Node.js (>= 16.x)
- MySQL instalado e rodando
- Yarn ou npm

---

### ✅ Passos

1. **Clone o repositório:**

```bash

git clone https://github.com/thesckurtt/uc_electron_with_db_atv_2.git
cd uc_electron_with_db_atv_2
```

<br/>

2. **Instale as dependências:**

```bash

npm install
# ou
yarn
```

<br/>

3. **Configure o projeto:**
  - Renomeie o .env.example para .env
  - Ajuste as suas credencias
  - crie o banco de dados
  - Execute as migrations com os seguintes comandos:

```bash

npm run knex:migrate:latest

# Para popular o banco utilize:

npm run knex:seed:run
```

4. **Rode o app:**
```bash

npm run app

```

---

## 🛡️ Segurança

- ✅ Toda comunicação entre UI e Main Process ocorre via IPC, utilizando contextBridge no preload.js.
- ✅ Banco de dados protegido com autenticação.
- ✅ Senhas não são armazenadas em texto puro, mas com hash usando bcrypt.

---

## ✨ Scripts disponíveis

| Comando	| Descrição |
| -----------------| -----------|
npm run knex:migrate:latest | Executa as Migrations
npm run knex:seed:run | Roda a aplicação

---

## 🧑‍💻 Autor

Feito por <strong>Mailan Franco</strong> - Inspirado no estudo de integração entre Electron, React e MySQL.
