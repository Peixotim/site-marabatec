# 🏫 AvançaTec - Portal de Cursos Técnicos

Este repositório contém o código-fonte do site **AvançaTec**, desenvolvido com **Next.js** e **TypeScript**, integrando a API da plataforma [PoloFaculdades](https://api.polofaculdades.com.br) para gerenciamento de cursos, matrículas e informações institucionais.

---

## 🚀 Tecnologias Principais

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide Icons](https://lucide.dev/)
- API: [PoloFaculdades](https://api.polofaculdades.com.br)

---

## ⚙️ Configuração do Ambiente

Antes de rodar o projeto, é necessário criar um arquivo `.env.local` na raiz do projeto com as seguintes variáveis de ambiente:

```bash
# API base utilizada para consumo de dados do AvançaTec
NEXT_PUBLIC_API_URL=https://api.polofaculdades.com.br

# Credenciais do cliente (fornecidas pelo PoloFaculdades)
NEXT_PUBLIC_CLIENT_ID=
NEXT_PUBLIC_CLIENT_SECRET=

# ID da empresa configurada no PoloFaculdades
NEXT_PUBLIC_ENTERPRISE_ID=
```

> ⚠️ **Importante:**  
> As chaves `NEXT_PUBLIC_CLIENT_ID`, `NEXT_PUBLIC_CLIENT_SECRET` e `NEXT_PUBLIC_ENTERPRISE_ID` devem ser solicitadas à equipe administrativa do PoloFaculdades ou ao responsável técnico da AvançaTec.

---

## 🧩 Instalação

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/seudominio/avancatec.git
cd avancatec
npm install
```

---

## 🧠 Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev
```
Inicia o servidor de desenvolvimento em [http://localhost:3000](http://localhost:3000).

### Build de Produção
```bash
npm run build
```
Gera o build otimizado para produção.

### Servir o Build
```bash
npm start
```
Executa o projeto já compilado (build de produção).

---

## 🧱 Estrutura do Projeto

```
📦 avancatec/
 ┣ 📂 app/                  # Páginas e rotas Next.js
 ┣ 📂 components/           # Componentes reutilizáveis
 ┣ 📂 utils/                # Funções utilitárias e dados locais
 ┣ 📜 .env.local.example    # Exemplo de variáveis de ambiente
 ┣ 📜 next.config.js        # Configurações do Next.js
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## 🌐 Deploy

O projeto pode ser implantado em plataformas como:

- [Vercel](https://vercel.com/) (recomendado)
- [Netlify](https://www.netlify.com/)
- [Render](https://render.com/)

> Certifique-se de configurar as variáveis de ambiente no painel da plataforma escolhida, conforme o arquivo `.env.local`.

---

## 🪪 Licença

Este projeto é de uso exclusivo da **AvançaTec**.  
Todos os direitos reservados © 2025.

---

## 📞 Contato

📧 **E-mail:** contato@colegioavancatec.com.br  
🌐 **Site:** [https://colegioavancatec.com.br](https://colegioavancatec.com.br)
