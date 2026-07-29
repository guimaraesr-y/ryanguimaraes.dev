# Portfólio Ryan Guimarães

Portfólio pessoal de Ryan Guimarães, desenvolvedor Full-Stack brasileiro especializado em Python, TypeScript, PHP e Java.

---

## 🚀 Visão Geral do Projeto

**Tipo:** Website pessoal / Portfólio profissional  
**Tecnologia:** Next.js 16 + React 19 + Tailwind CSS 4  
**Status:** Em desenvolvimento

Este projeto foi criado para apresentar habilidades, experiência e projetos de forma criativa e interativa, com foco em animações, usabilidade dinâmica e design moderno.

---

## ✅ O que foi implementado

### Seções do Site

1. **Navbar**
   - Logo com gradiente animado
   - Links de navegação (Sobre, Experiência, Projetos, Skills, Contato)
   - Menu mobile responsivo com drawer animado
   - Links sociais (GitHub, LinkedIn, Website)
   - Efeito de background ao rolar a página

2. **Hero**
   - Posicionamento profissional focado em backend e produto
   - Retrato autoral com parallax discreto
   - Indicadores de experiência e resultado
   - CTAs para projetos e GitHub

3. **About**
   - Narrativa editorial sobre abordagem de engenharia
   - Contexto profissional e áreas de foco
   - Indicadores de experiência
   - Certificações exibidas
   - Link para trajetória no LinkedIn

4. **Experience**
   - Linha profissional contínua e responsiva
   - Períodos, responsabilidades e contexto por posição
   - Lista de tecnologias por experiência
   - Empresas: inChurch (Jr + Estágio), Ondas e Trilhas, FAETEC

5. **Projects**
   - Estudos de caso com imagens vetoriais autorais
   - Métricas, decisões técnicas e parallax sutil
   - Links para GitHub e Live Demo
   - Tecnologias utilizadas em cada projeto
   - 6 projetos inclusos

6. **Skills**
   - Categorias: Frontend, Backend, Frameworks, Database, DevOps
   - Contexto de uso para cada grupo de ferramentas
   - Apresentação editorial sem icon wall

7. **Contact**
   - Formulário com validação (Zod)
   - Backend API route com Resend
   - Estados de loading, sucesso e erro
   - Design responsivo

8. **Footer**
   - Copyright
   - Links sociais
   - Créditos

### Funcionalidades Técnicas

- **Animações:** Framer Motion para scroll reveals, transições e hover effects
- **Tipo:** TypeScript strict mode
- **Validação:** Zod schemas para formulário de contato
- **Email:** Resend com domínio de envio verificado
- **Responsividade:** Mobile-first com breakpoints (640px, 768px, 1024px)
- **Clean Code:** Estrutura organizada com Separation of Concerns
  - `components/ui/` - Componentes atômicos (Button, Input, Card, GlowBorder)
  - `components/sections/` - Seções da página
  - `components/layout/` - Navbar, Footer
  - `data/` - Dados estáticos tipados
  - `lib/` - Utilitários (mailer, validation)
  - `types/` - Definições de tipos TypeScript
  - `hooks/` - Custom hooks

---

## ⚠️ O que precisa configurar

### 1. Resend (Formulário de Contato)

O formulário de contato usa o Resend para enviar o aviso ao proprietário e a confirmação ao visitante. Você precisa:

1. Crie uma conta em [resend.com](https://resend.com)
2. Adicione e verifique um domínio de envio
3. Crie uma API key
4. Copie `.env.example` para `.env.local` e configure:

```env
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=Ryan Guimarães <contato@seudominio.com>
CONTACT_EMAIL=seu-email@exemplo.com
```

`RESEND_FROM_EMAIL` deve usar o domínio verificado no Resend. `CONTACT_EMAIL` é o endereço que receberá as mensagens do formulário.

### 2. Foto de Perfil

A foto está localizada em: `public/pfp.png`

---

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Verificar código
npm run lint
```

---

## 📁 Estrutura de Arquivos

```
app/
├── page.tsx                    # Página principal (one-page)
├── layout.tsx                  # Root layout
├── globals.css                 # Estilos globais + animações CSS
├── api/
│   └── contact/
│       └── route.ts            # API de contato
├── components/
│   ├── ui/                     # Componentes atômicos
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── GlowBorder.tsx
│   │   └── Input.tsx
│   ├── sections/               # Seções da página
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── layout/                 # Componentes de layout
│       ├── Navbar.tsx
│       └── Footer.tsx
├── data/                       # Dados estáticos
│   ├── constants.ts
│   ├── experience.ts
│   └── projects.ts
├── hooks/                      # Custom hooks
│   └── useScrollAnimation.ts
├── lib/                        # Utilitários
│   ├── services/
│   │   ├── ContactServiceStrategy.ts
│   │   ├── types.ts
│   │   └── providers/
│   │       └── ResendProvider.ts
│   └── validation.ts
└── types/                      # Definições de tipos
    └── index.ts
```

---

## 🎨 Design System

### Cores

- **Background:** `#0a0a0a` (preto)
- **Violeta:** `#8B5CF6` (principal)
- **Ciano:** `#06B6D4` (secundária)

### Tema

- Dark mode com gradiente roxo/azul neon
- Animações de scroll (Framer Motion)
- Typed text no Hero
- Partículas de fundo
- Timeline interativa

---

## 📝 Notas Adicionais

- O projeto usa Tailwind CSS v4 com nova sintaxe `@theme`
- O site é responsivo e funciona em mobile, tablet e desktop

---

## 🔜 Próximos Passos (Opcionais)

- [ ] Adicionar mais projetos ao grid
- [ ] Implementar blog/artigos (Medium integration)
- [ ] Adicionar analytics (Vercel Analytics ou similar)
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Tests unitários
- [ ] Deploy na Vercel

---

## 📞 Contato

- **Email:** configurado pela variável `CONTACT_EMAIL`
- **GitHub:** https://github.com/guimaraesr-y
- **LinkedIn:** https://www.linkedin.com/in/guimaraesry/
- **Website:** https://ryanguimaraes.dev

---

*Criado em Abril 2026*
