# Tiago A. G. Fonseca — Website

Website profissional de página única (one-page) para Tiago A. G. Fonseca, Psicólogo
Clínico de Adultos. Reprodução fiel do design aprovado.

## Tecnologias

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Lucide React** (ícones)

## Começar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Produção

```bash
npm run build
npm run start
```

## Publicar no Vercel

O projeto está pronto para publicação directa no [Vercel](https://vercel.com) sem
configuração adicional: basta importar o repositório. O Vercel deteta o Next.js
automaticamente.

## Estrutura

```
app/                 App Router (layout, página, rota API, sitemap, robots)
  api/contact/       Endpoint do formulário (placeholder, pronto para email)
components/           Componentes de UI e de topo (Navbar, Footer, ContactForm)
  sections/          Secções da página (Hero, About, Competences, ...)
  ui/                Componentes reutilizáveis (Button, Reveal, SectionHeading)
hooks/               Hooks React (useScrolled)
lib/                 Conteúdo, configuração, animações e utilitários
public/images/       Fotografia e logótipo
styles/              Estilos globais (Tailwind)
types/               Tipos TypeScript partilhados
```

## Formulário de contacto

O envio usa uma implementação temporária em `app/api/contact/route.ts`. Para
integrar um serviço de email real (ex.: Resend, SendGrid, Nodemailer), substitui o
bloco assinalado com `TODO` nesse ficheiro.

## Personalização

- Informação de contacto e metadados: `lib/site-config.ts`
- Textos das secções: `lib/content.ts`
- Cores, tipografia e sombras: `tailwind.config.ts`
- Currículo em PDF: substitui `public/tiago-fonseca-cv.pdf`
