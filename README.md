# 🚗 Cars Full Stack

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/node-%3E%3D18-green?style=for-the-badge&logo=node.js"/>
  <img src="https://img.shields.io/badge/express.js-backend-black?style=for-the-badge&logo=express"/>
  <img src="https://img.shields.io/badge/mysql-database-blue?style=for-the-badge&logo=mysql"/>
  <img src="https://img.shields.io/badge/prisma-orm-2D3748?style=for-the-badge&logo=prisma"/>
</p>

<p align="center">
  <b>Aplicação Full Stack para gerenciamento de veículos</b><br/>
  <i>CRUD completo com API REST, arquitetura em camadas e integração com banco de dados</i>
</p>

---

## 📌 Sobre o Projeto

O **Cars Full Stack** é uma aplicação desenvolvida para gerenciamento de veículos, permitindo operações completas de CRUD (Create, Read, Update, Delete).

O projeto foi estruturado seguindo boas práticas de desenvolvimento, com separação entre camadas de frontend, backend e persistência de dados.

---

## 🧱 Arquitetura da Aplicação

```bash
Cliente (Frontend)
│
├── HTML + CSS + JavaScript
│        │
│        ▼
│    Fetch API (HTTP)
│        │
▼        ▼
Servidor (Backend)
│
├── Node.js + Express
│        │
│        ▼
│     Prisma ORM
│        │
│        ▼
Banco de Dados (MySQL)
