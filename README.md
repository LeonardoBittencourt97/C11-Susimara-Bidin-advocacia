# Dra. Susimara Teixeira Bidin Advocacia — Website Institucional

Aplicação web institucional de alto padrão desenvolvida para a **Dra. Susimara Teixeira Bidin** (OAB/PR 94.840), sediada em Araucária/PR.

Projeto desenvolvido com design editorial sofisticado, paleta Vinho e Bege (Bordô `#6B1D2F`, Vinho Claro `#A3485E`, Vinho Escuro `#3D0C11`, Bege `#F7F2EC` e Grafite `#1F1F1F`), tipografia refinada (*Philosopher + Mulish*), suporte completo a temas Claro/Escuro e estrita conformidade com o Código de Ética e Disciplina da OAB (Resolução CFOAB 02/2015) e o Provimento 205/2021 do CFOAB.

---

## 🏛️ Dados Institucionais

- **Escritório**: Dra. Susimara Teixeira Bidin Advocacia
- **Advogada Titular**: Dra. Susimara Teixeira Bidin (OAB/PR 94.840)
- **Especialidade**: Pós-graduada em Direito e Processo do Trabalho. Atuação em Direito do Trabalho (defesa patronal e empregados) e Direito de Família (divórcio, guarda, pensão, adoção).
- **Endereço**: Rua Heitor Alves Guimarães, 819, Sala 4 - Centro, Araucária - PR, CEP 83702-130
- **WhatsApp / Telefone**: (41) 98484-9550
- **Instagram**: [@susibidin.adv](https://www.instagram.com/susibidin.adv/)
- **Experiência**: Mais de 8 anos de prática forense
- **Horário de Atendimento**: Segunda a Quinta: 09:00 às 17:00 | Sexta: 09:00 às 16:00 | Sábado e Domingo: Fechado

---

## 🎨 Design System & Estética

- **Tipografia**:
  - Títulos & Headers: **Philosopher** (Google Fonts)
  - Textos & Artigos: **Mulish** (Google Fonts)
- **Paleta de Cores (60-30-10)**:
  - Fundo Dominante (60%): `#FFFFFF` e `#F7F2EC` (Claro) / `#1A1A1A` e `#242424` (Escuro)
  - Estrutural & Texto (30%): `#1F1F1F` (Texto principal) / `#6B1D2F` (Vinho Bordô)
  - Destaque & Ações (10%): `#A3485E` (Vinho Claro / CTAs) e `#3D0C11` (Vinho Escuro / Hovers / Footer)

---

## 🚀 Stack Técnica

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Estilização**: Tailwind CSS v4 + Vanilla CSS custom properties
- **Scroll & Animações**: Lenis Smooth Scroll + GSAP 3 + ScrollTrigger + `@gsap/react`
- **Ícones**: Lucide React
- **Tema**: Claro / Escuro persistente
- **SEO & AI**: Schema.org LegalService (JSON-LD), `sitemap.xml`, `robots.txt`, `llms.txt`

---

## 🧭 Rotas

- `/` — Landing Page principal completa (Hero com Parallax, Pilares Institucionais, Sobre a Advogada com visualização curricular, Áreas de Atuação com sobreposição pinnada no desktop e acordeão mobile, Conteúdo Educativo OAB, Como Atuamos com linha do tempo de 4 etapas, FAQ por categorias, Contato com Google Maps de Araucária, Footer e WhatsApp Flutuante).
- `/links` — Rota Link-in-Bio com Split Screen no Desktop e cartão adaptado para dispositivos móveis e Instagram.

---

## 💻 Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar servidor local
npm run dev

# Gerar build de produção
npm run build

# Iniciar build
npm start
```