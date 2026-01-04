# Frontend — Sistema de Solicitações de Reembolso

Este repositório contém a parte front-end de um sistema de solicitações de reembolso, desenvolvido com foco em experiência do usuário e código modular. O backend utilizado é consumido pela aplicação (não foi desenvolvido por mim) — neste README vamos focar apenas no que foi implementado no `web/`.
![Screenshot placeholder](./web/public/screenshot.png)

## Índice
- [Sobre o projeto](#sobre-o-projeto)
- [Principais funcionalidades (front)](#principais-funcionalidades-front)
- [Stack técnica](#stack-técnica)
- [Como rodar (apenas front)](#como-rodar-apenas-front)
- [Estrutura do front](#estrutura-do-front)
- [Componentes principais](#componentes-principais)
- [Autenticação e consumo da API](#autentica%C3%A7%C3%A3o-e-consumo-da-api)
- [Melhorias sugeridas](#melhorias-sugeridas)
- [Contato / Licença](#contato--licen%C3%A7a)
## Sobre o projeto

Frontend single-page application (SPA) para criação e consulta de solicitações de reembolso. Implementado com atenção em componentes reutilizáveis, validação de formulários e upload de arquivos.
## Principais funcionalidades (front)

- Autenticação (login) e persistência de sessão no `localStorage`.
- Formulário de criação de reembolso com validação (nome, categoria, valor) e upload de comprovante.
- Envio do comprovante via `FormData` para o endpoint `/uploads` e uso do `filename` retornado ao criar a solicitação.
- Listagem paginada de solicitações com busca por nome.
- Visualização detalhada de uma solicitação, com link para abrir o comprovante em nova aba.

## Stack técnica
- Frontend: React 19 + TypeScript
- Bundler/dev: Vite
- Estilo: Tailwind CSS
- Requisições HTTP: Axios
- Validação: Zod (no cliente)

> Dependências chave (arquivo `web/package.json`): `react`, `axios`, `zod`, `tailwindcss`, `vite`.
## Como rodar (apenas front)

Pré-requisitos: `node` e `npm` instalados.
```bash
cd web
npm install
npm run dev
```
O Vite informará a URL (por padrão `http://localhost:5173`). O frontend consome uma API que, no desenvolvimento, costuma rodar em `http://localhost:3333`.

## Estrutura do front
- `web/src/pages/` — telas: `SignIn`, `SignUp`, `Dashboard`, `Refund`, `Confirm`.
- `web/src/components/` — componentes reutilizáveis: `Input`, `Select`, `Upload`, `Button`, `RefundItem`, `Pagination`.
- `web/src/contexts/AuthContext.tsx` — gerencia sessão, armazena token no `localStorage` e injeta `Authorization` nas requisições Axios.
- `web/src/services/api.ts` — instância do Axios com `baseURL` do backend.
- `web/src/utils/` — utilitários como `formatCurrency` e lista de categorias.

## Componentes principais (breve)
- `Input` — campo controlado com label/legend e props de acessibilidade.
- `Select` — dropdown para escolha de categoria.
- `Upload` — componente para selecionar arquivo e exibir nome do arquivo selecionado.
- `RefundItem` — item de lista que renderiza a solicitação (ícone, descrição e valor).
- `AuthContext` — login persistente e injeção do header `Authorization`.

## Autenticação e consumo da API
O front consome endpoints REST (ex.: `/sessions`, `/uploads`, `/refunds`) mas não inclui o código backend neste repositório. Implementações relevantes no front:

- `AuthContext.save()` — armazena `user` e `token` em `localStorage` e configura `api.defaults.headers.common.Authorization`.
- Uploads: envio via `FormData` com `file` para `/uploads`, aguardando `response.data.filename`.
- Validação local nos formulários usando `zod` para mensagens claras ao usuário.
> Importante: o backend deve expor os endpoints e servir a pasta de `uploads` para que o link de comprovante funcione (`/uploads/<filename>`).

## Melhores próximas etapas
- Integrar armazenamento de arquivos em S3 (ou similar) com URLs assinadas.
- Adicionar testes unitários de componentes e testes E2E (Cypress/Playwright) para o fluxo de upload e criação de reembolso.
- Melhorar acessibilidade (labels, roles, foco) e internacionalização (i18n).

## Contato / Licença
Se quiser ver detalhes do front ou receber uma versão com README em inglês e badges, me avise. Este projeto pode ser licenciado como MIT (ou outra licença à sua escolha).

---

Desenvolvido por você — focado no front-end (React + Tailwind). Se quiser, eu adiciono uma versão em inglês ou incluo badges, screenshots e comandos de deploy.
# Sistema de Solicitações de Reembolso (Front + API)

Projeto fullstack de exemplo para gerenciar solicitações de reembolso, com interface em React + TypeScript e backend em Node/TypeScript.

## Descrição

Este repositório contém duas aplicações principais:

- `api/` — backend REST responsável por autenticação, upload de comprovantes e CRUD de reembolsos.
- `web/` — frontend em React + Vite + Tailwind que permite criar solicitações com upload de comprovantes, listar solicitações paginadas e visualizar comprovantes.

O objetivo do projeto é demonstrar um fluxo simples de reembolso com validação (Zod), upload de arquivos e JWT para autenticação.

## Tecnologias

- Frontend: React, TypeScript, Vite, TailwindCSS, Axios, Zod
- Backend: Node, TypeScript, Express, Prisma (Postgres ou SQLite), Zod
- Ferramentas: Vite, npm

## Funcionalidades

- Cadastro de usuário (SignUp) e login (SignIn) com armazenamento de token no `localStorage`.
- Criação de solicitação de reembolso com: nome, categoria, valor e upload de comprovante.
- Listagem paginada de solicitações com busca por nome.
- Visualização dos dados da solicitação e do comprovante (link público para `/uploads/<filename>`).
- Validação de formulário no frontend e backend usando `zod`.

## Estrutura do repositório

- `/api` — código do backend (rotas, controllers, prisma, middlewares)
- `/web` — frontend React (componentes, páginas, contexto de autenticação)

## Pré-requisitos

- Node.js (>= 18 recomendado)
- npm
- Banco de dados compatível com Prisma (ver `api/prisma/schema.prisma`) — para testes locais, SQLite ou Postgres.

## Rodando localmente

1. Backend

```bash
cd api
npm install
# crie/atualize .env conforme necessário (veja seção abaixo)
npm run dev
```

2. Frontend

```bash
cd web
npm install
npm run dev
```

Abra `http://localhost:5173` (ou a porta informada pelo Vite) para acessar o frontend. O backend por padrão está em `http://localhost:3333`.

## Variáveis de ambiente (exemplo)

- `api/.env` (exemplo)

- DATABASE_URL="file:./dev.db" # ou URL do Postgres
- JWT_SECRET=uma_chave_secreta
- PORT=3333

## Endpoints principais (resumo)

- `POST /sessions` — autenticação (retorna token)
- `POST /users` — criação de usuário
- `POST /uploads` — upload de comprovante (retorna `filename`)
- `POST /refunds` — cria reembolso (body: `name`, `category`, `amount`, `filename`)
- `GET /refunds` — lista paginada (query: `name`, `page`, `perPage`)
- `GET /refunds/:id` — detalhes da solicitação

Nota: O frontend usa `AuthContext` para injetar o header `Authorization: Bearer <token>` nas requisições Axios.

## Observações de implementação

- Validações de formulário no frontend utilizam `zod` para dar feedback imediato ao usuário.
- Uploads são enviados via `FormData` para o endpoint `/uploads`; o backend salva o arquivo e retorna o `filename` que é vinculado ao registro de reembolso.
- Componentização: `Input`, `Select`, `Upload`, `Button`, `RefundItem` — facilita reuso e manutenção.

## Melhores próximas etapas (sugestões)

- Armazenar arquivos em S3 ou serviço equivalente e servir URLs assinadas.
- Implementar testes E2E para fluxo de upload e criação de reembolso.
- Adicionar paginação e filtros adicionais no frontend.

## Licença

Este projeto está disponível para uso e aprendizagem. Adicione a licença desejada (ex: MIT) conforme necessário.

---

Se quiser, eu adapto este README para uma página do GitHub (com badges) ou crio um `README` em inglês pronto para publicar. Quer que eu gere a versão em inglês também? 
#   s i s t e m a - d e - r e e m b o l s o 
 
 #   s i s t e m a - d e - r e e m b o l s o  
 