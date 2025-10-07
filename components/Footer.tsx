import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="py-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
                <div className="flex items-center space-x-6 mb-4">
                     <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary hover:text-accent transition-colors duration-300">
                        <GithubIcon />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary hover:text-accent transition-colors duration-300">
                        <LinkedinIcon />
                    </a>
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-secondary hover:text-accent transition-colors duration-300">
                        <InstagramIcon />
                    </a>
                </div>
                <p className="text-text-secondary text-xs font-mono">
                    Construído por Jeymes Lopes © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;