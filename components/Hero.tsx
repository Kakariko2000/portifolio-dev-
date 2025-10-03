import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h1 className="text-lg text-accent font-mono mb-4">Olá, meu nome é</h1>
            <h2 className="text-4xl md:text-7xl font-bold text-text-primary">Jeymes Lopes.</h2>
            <h3 className="text-4xl md:text-7xl font-bold text-text-secondary mt-2">Eu construo aplicações para a web.</h3>
            <p className="mt-6 max-w-xl text-text-secondary">
                Sou um desenvolvedor front-end especializado em criar experiências digitais excepcionais. Atualmente, estou focado em construir produtos acessíveis e centrados no usuário, utilizando tecnologias modernas como React e TypeScript.
            </p>
            <div className="mt-8 flex items-center space-x-6">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary hover:text-accent transition-colors duration-300">
                    <GithubIcon />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary hover:text-accent transition-colors duration-300">
                    <LinkedinIcon />
                </a>
            </div>
        </section>
    );
};

export default Hero;