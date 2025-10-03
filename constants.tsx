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
        title: 'ShopSphere E-commerce',
        description: 'Uma plataforma de e-commerce completa, permitindo aos usuários navegar por produtos, adicionar itens ao carrinho e finalizar compras. Inclui funcionalidades de busca e filtragem de produtos.',
        imageUrl: '/images/shopsphere-ecommerce.png',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Vite'],
        liveUrl: 'https://react-e-commerce-eosin-pi.vercel.app/',
        repoUrl: 'https://github.com/Kakariko2000/react-e-commerce-spa',
        caseStudy: {
            problem: 'Desenvolver uma loja virtual moderna e responsiva, com uma experiência de usuário intuitiva para navegação e compra de produtos. O desafio era criar um sistema de gerenciamento de estado eficiente para o carrinho de compras e filtros.',
            solution: 'Construí a aplicação utilizando React e TypeScript para uma base de código robusta e escalável. O Tailwind CSS foi empregado para um design responsivo e altamente personalizável. O gerenciamento de estado foi feito com a Context API do React, simplificando a lógica do carrinho e dos filtros de produtos. A arquitetura modular facilita a adição de novas funcionalidades.',
            tech: 'React para a interface do usuário, TypeScript para segurança de tipo, Tailwind CSS para estilização rápida e responsiva, e Context API para gerenciamento de estado. O projeto foi bundlado com Vite para um desenvolvimento ágil e builds otimizados.',
        },
    },
    // O projeto com id: 2 foi removido
    {
        id: 3,
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
];