# 🚀 Guia de Instalação - Sistema Varejo Premium

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🔧 Instalação

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar o servidor de desenvolvimento:**
```bash
npm run dev
```

3. **Acessar o sistema:**
- Site Público: http://localhost:3000/site
- Painel Admin: http://localhost:3000/admin
- Login Admin: http://localhost:3000/admin/login

## 🎨 Estrutura do Projeto

```
/
├── app/              # Rotas do Next.js
│   ├── admin/        # Rotas do painel admin
│   └── site/         # Rotas do site público
├── admin/            # Componentes e páginas do admin
│   ├── components/   # Componentes do admin
│   └── pages/        # Páginas do admin
├── site/             # Componentes e páginas do site público
│   ├── components/   # Componentes do site
│   └── pages/        # Páginas do site
├── shared/           # Componentes e utilitários compartilhados
│   ├── ui/           # Componentes UI reutilizáveis
│   ├── hooks/        # Hooks customizados
│   └── utils/        # Funções utilitárias
└── public/           # Arquivos estáticos
```

## 🎯 Funcionalidades

### Painel Admin
- ✅ Dashboard com métricas e gráficos
- ✅ Gestão de produtos
- ✅ Gestão de pedidos
- ✅ Controle de estoque
- ✅ Gestão de clientes
- ✅ Relatórios avançados
- ✅ Configurações

### Site Público
- ✅ Homepage premium
- ✅ Página de produtos
- ✅ Página de categorias
- ✅ Página sobre
- ✅ Página de contato

## 🎨 Design System

O sistema utiliza:
- **Tema Dark Futurista** com cores neon
- **TailwindCSS** para estilização
- **Framer Motion** para animações
- **Recharts** para gráficos
- **Lucide Icons** para ícones

## 📝 Notas

- As imagens são carregadas do Unsplash (configurado no next.config.js)
- Todos os dados são mockados para demonstração
- O sistema está pronto para integração com backend

## 🚀 Build para Produção

```bash
npm run build
npm start
```
