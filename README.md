# Frontend — Sistema de Solicitações de Reembolso

Este repositório contém a **parte front-end** de um sistema de solicitações de reembolso, desenvolvido com foco em **experiência do usuário**, **componentização** e **código modular**.

O backend é apenas **consumido pela aplicação** e **não foi desenvolvido por mim**.  
Este README descreve **exclusivamente o que foi implementado no diretório `web/`**.

![Screenshot placeholder](./web/public/screenshot.png)

---

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Principais funcionalidades (front)](#principais-funcionalidades-front)
- [Stack técnica](#stack-técnica)
- [Como rodar (apenas front)](#como-rodar-apenas-front)
- [Estrutura do front](#estrutura-do-front)
- [Componentes principais](#componentes-principais)
- [Autenticação e consumo da API](#autenticação-e-consumo-da-api)
- [Próximas melhorias](#próximas-melhorias)
- [Contato / Licença](#contato--licença)

---

## Sobre o projeto

Single Page Application (SPA) para **criação e consulta de solicitações de reembolso**.

O frontend foi desenvolvido com atenção especial a:

- Componentes reutilizáveis
- Validação de formulários no cliente
- Upload de arquivos
- Organização e legibilidade do código

---

## Principais funcionalidades (front)

- Autenticação (login) com persistência de sessão no `localStorage`
- Criação de solicitação de reembolso com:
  - nome
  - categoria
  - valor
  - upload de comprovante
- Envio de comprovante via `FormData` para o endpoint `/uploads`
- Uso do `filename` retornado ao criar a solicitação
- Listagem paginada de solicitações
- Busca por nome
- Visualização detalhada da solicitação
- Abertura do comprovante em nova aba

---

## Stack técnica

**Frontend**
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Zod

**Dependências principais (`web/package.json`):**

- `react`
- `axios`
- `zod`
- `tailwindcss`
- `vite`

---

## Como rodar (apenas front)

### Pré-requisitos

- Node.js
- npm

### Passos

```bash
cd web
npm install
npm run dev
