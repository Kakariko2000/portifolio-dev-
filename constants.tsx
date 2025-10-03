import React from 'react';
import type { Project, SkillCategory } from './types';
import { GithubIcon, LinkedinIcon, ExternalLinkIcon, CodeIcon, DatabaseIcon, CloudIcon, PaletteIcon, TestTubeIcon, GitMergeIcon, ReactIcon, TypeScriptIcon, NodeIcon, TailwindIcon } from './components/Icons';

export const NAV_LINKS = [
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
];

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/jeymes-lopes-7520a41a3/',
    github: 'https://github.com/Kakariko2000',
};

export const SKILLS_DATA: SkillCategory[] = [
    {
        title: 'Linguagens e Frameworks',
        skills: [
            { name: 'TypeScript', icon: <TypeScriptIcon /> },
            { name: 'React', icon: <ReactIcon /> },
            { name: 'Node.js', icon: <NodeIcon /> },
            { name: 'HTML5 & CSS3', icon: <CodeIcon /> },
        ],
    },
    {
        title: 'Estilização e UI',
        skills: [
            { name: 'Tailwind CSS', icon: <TailwindIcon /> },
            { name: 'Figma', icon: <PaletteIcon /> },
            { name: 'Design Responsivo', icon: <CodeIcon /> },
            { name: 'Acessibilidade', icon: <CodeIcon /> },
        ],
    },
    {
        title: 'Ferramentas e Plataformas',
        skills: [
            { name: 'Git & GitHub', icon: <GitMergeIcon /> },
            { name: 'Vite / Webpack', icon: <CodeIcon /> },
            { name: 'Jest / Testing Library', icon: <TestTubeIcon /> },
            { name: 'Vercel / Netlify', icon: <CloudIcon /> },
        ],
    },
];


export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: 'Plataforma de E-commerce SPA',
        description: 'Uma Single Page Application completa para uma loja online, com catálogo de produtos, carrinho de compras e checkout.',
        imageUrl: 'https://picsum.photos/seed/project1/800/600',
        tags: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Stripe API'],
        liveUrl: '#',
        repoUrl: '#',
        caseStudy: {
            problem: 'Criar uma experiência de compra online rápida e fluida, que funcione bem em qualquer dispositivo, sem a necessidade de recarregar a página. O desafio era gerenciar o estado complexo do carrinho e dos produtos de forma eficiente.',
            solution: 'Desenvolvi um SPA usando React e TypeScript para garantir tipagem segura. O gerenciamento de estado global foi implementado com Redux Toolkit, simplificando a lógica do carrinho. A interface foi construída com componentes reutilizáveis em Tailwind CSS, focando em um design mobile-first. A integração com a API do Stripe garantiu um processo de pagamento seguro.',
            tech: 'Utilizei Vite como ferramenta de build pela sua velocidade e HMR (Hot Module Replacement) instantâneo. React Testing Library e Jest foram usados para garantir a confiabilidade dos componentes críticos, como o fluxo de adição ao carrinho.',
        },
    },
    {
        id: 2,
        title: 'Dashboard de Análise de Dados',
        description: 'Um painel interativo para visualização de dados em tempo real, com gráficos e filtros dinâmicos.',
        imageUrl: 'https://picsum.photos/seed/project2/800/600',
        tags: ['React', 'D3.js', 'TypeScript', 'Styled Components', 'REST API'],
        liveUrl: '#',
        repoUrl: '#',
        caseStudy: {
            problem: 'Apresentar grandes volumes de dados de uma forma intuitiva e interativa, permitindo que os usuários extraiam insights rapidamente. O principal desafio técnico foi renderizar os gráficos de forma performática, mesmo com atualizações constantes de dados.',
            solution: 'Construí um dashboard componentizado em React. Para as visualizações, integrei a biblioteca D3.js para criar gráficos customizados e de alta performance. O estado dos filtros e dos dados foi gerenciado localmente com React Hooks (useState, useMemo) para otimizar os re-renders. A aplicação consome dados de uma REST API, com tratamento de loading e estados de erro.',
            tech: 'React foi escolhido pela sua eficiência na manipulação do DOM. D3.js ofereceu a flexibilidade necessária para gráficos complexos. O deploy foi feito na Vercel, aproveitando a integração contínua com o GitHub para atualizações rápidas.',
        },
    },
    {
        id: 3,
        title: 'Blog Pessoal com CMS',
        description: 'Um blog com renderização estática (SSG) para alta performance e SEO, integrado a um Headless CMS.',
        imageUrl: 'https://picsum.photos/seed/project3/800/600',
        tags: ['Next.js', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'Contentful'],
        liveUrl: '#',
        repoUrl: '#',
        caseStudy: {
            problem: 'Desenvolver um blog que fosse extremamente rápido, otimizado para motores de busca (SEO) e fácil de gerenciar o conteúdo sem precisar de conhecimento técnico. A performance de carregamento inicial era a prioridade máxima.',
            solution: 'Optei por Next.js pela sua capacidade de geração de sites estáticos (SSG). Isso pré-renderiza todas as páginas do blog em tempo de build, resultando em um carregamento quase instantâneo. Integrei com o Contentful (Headless CMS) via GraphQL, permitindo que o conteúdo seja gerenciado de forma independente. O design foi criado com Tailwind CSS, focando em legibilidade e acessibilidade.',
            tech: 'Next.js foi fundamental para a estratégia de performance e SEO. GraphQL facilitou a busca de dados do CMS de forma eficiente. O site foi implantado na Netlify, que possui um excelente suporte para sites estáticos e funções serverless.',
        },
    },
];