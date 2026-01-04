# Sistema de Solicitações de Reembolso — Frontend + API

Projeto fullstack de exemplo para gerenciamento de solicitações de reembolso, com **frontend em React + TypeScript** e **backend em Node.js**.

O foco principal deste repositório é demonstrar:
- autenticação com JWT
- upload de arquivos
- validação com Zod
- organização de código no frontend

![Screenshot placeholder](./web/public/screenshot.png)

---

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Principais funcionalidades](#principais-funcionalidades)
- [Stack técnica](#stack-técnica)
- [Como rodar o projeto](#como-rodar-o-projeto)
  - [Executando a API (backend)](#executando-a-api-backend)
  - [Executando o Frontend](#executando-o-frontend)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Autenticação e consumo da API](#autenticação-e-consumo-da-api)
- [Próximas melhorias](#próximas-melhorias)
- [Contato / Licença](#contato--licença)

---

## Sobre o projeto

Sistema web para **criação e consulta de solicitações de reembolso**.

O repositório é dividido em duas aplicações:

- `api/` — backend REST responsável por autenticação, upload de comprovantes e CRUD de reembolsos
- `web/` — frontend SPA desenvolvido em React + Vite + Tailwind

---

## Principais funcionalidades

- Cadastro de usuário e login com autenticação JWT
- Criação de solicitação de reembolso com:
  - nome
  - categoria
  - valor
  - upload de comprovante
- Upload de arquivos via `FormData`
- Listagem paginada de solicitações
- Busca por nome
- Visualização detalhada da solicitação
- Abertura do comprovante em nova aba
- Validação de formulários no frontend e backend com Zod

---

## Stack técnica

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Zod

### Backend
- Node.js
- TypeScript
- Express
- Prisma
- Zod
- JWT

---

## Como rodar o projeto

### Pré-requisitos

- Node.js (>= 18 recomendado)
- npm
- Banco de dados compatível com Prisma  
  (SQLite ou PostgreSQL)

---

## Executando a API (backend)

### 1. Acesse a pasta da API

```bash
cd api
