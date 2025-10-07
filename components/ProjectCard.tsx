import React from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
    project: Project;
    reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse = false }) => {
    const { title, description, imageUrl, tags, liveUrl, repoUrl, caseStudy } = project;

    const imageContent = (
         <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-lg shadow-lg">
            <img src={imageUrl} alt={`Screenshot do projeto ${title}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="absolute inset-0 bg-background/60 group-hover:bg-background/20 transition-colors duration-300"></div>
        </a>
    );

    const textContent = (
        <div className="z-10">
            <h3 className="text-2xl font-bold text-text-primary mb-4">{title}</h3>
            <div className="bg-primary p-6 rounded-lg shadow-lg mb-6">
                <p className="text-text-secondary leading-relaxed">{description}</p>
            </div>
            
            <details className="bg-primary/50 rounded-lg p-4 mb-6 group">
                <summary className="font-semibold text-text-primary cursor-pointer group-hover:text-accent transition-colors">Ver Estudo de Caso</summary>
                <div className="mt-4 space-y-4 text-text-secondary text-sm">
                    <div>
                        <h4 className="font-bold text-text-primary">Problema / Desafio</h4>
                        <p>{caseStudy.problem}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-primary">Solução Técnica</h4>
                        <p>{caseStudy.solution}</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-text-primary">Tecnologias</h4>
                        <p>{caseStudy.tech}</p>
                    </div>
                </div>
            </details>

            <ul className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <li key={tag} className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full font-mono">{tag}</li>
                ))}
            </ul>

            <div className="flex items-center space-x-6">
                {/* Removido o link e o ícone do GitHub */}
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver projeto online" className="text-text-secondary hover:text-accent transition-colors duration-300">
                    <ExternalLinkIcon />
                </a>
            </div>
        </div>
    );

    return (
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className={`relative lg:col-span-7 ${reverse ? 'lg:order-last' : ''}`}>
                {imageContent}
            </div>
            <div className={`lg:col-span-5 ${reverse ? 'lg:text-left' : 'lg:text-right'}`}>
                 {textContent}
            </div>
        </article>
    );
};


export default ProjectCard;