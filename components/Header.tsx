import React, { useState, useEffect } from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon } from './Icons';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);

        const sections = NAV_LINKS.map(link => document.querySelector(link.href));

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    useEffect(() => {
        // Bloqueia a rolagem do body quando o menu está aberto
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Limpeza ao desmontar o componente
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault();
        // Verifica se o href é um seletor válido antes de usar querySelector
        if (href && href !== '#') {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else if (href === '#') {
            // Se for apenas '#', rola para o topo da página
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsOpen(false); // Fecha o menu mobile ao clicar
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center h-20">
                    <a href="#about" onClick={(e) => handleNavClick(e, '#about')} aria-label="Página Inicial" className="text-2xl font-bold text-accent font-mono hover:opacity-80 transition-opacity">
                        &lt;DEV /&gt;
                    </a>

                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link, index) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`font-mono text-sm transition-colors duration-300 hover:text-accent ${activeSection === link.href.substring(1) ? 'text-accent' : 'text-text-secondary'}`}
                            >
                                <span className="text-accent">0{index + 1}.</span> {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu" className="text-accent z-[60]">
                           {isOpen ? <XIcon/> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu Overlay */}
            <div 
                onClick={() => setIsOpen(false)} 
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            ></div>

            {/* Mobile Menu */}
            <aside className={`fixed top-0 right-0 h-full w-[75vw] max-w-sm bg-primary shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col`}>
                <div className="flex justify-end p-6 h-20 items-center">
                     <button 
                        onClick={() => setIsOpen(false)} 
                        aria-label="Fechar menu" 
                        className="text-accent relative z-50" // Adicionado relative e z-50
                    >
                        <XIcon />
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center text-center flex-grow -mt-10">
                    <ul className="space-y-8">
                        {NAV_LINKS.map((link, index) => (
                            <li key={link.name} className={`opacity-0 ${isOpen ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${150 + index * 100}ms` }}>
                                <a 
                                    href={link.href} 
                                    onClick={(e) => handleNavClick(e, link.href)} 
                                    className={`text-lg font-mono transition-colors duration-300 hover:text-accent ${activeSection === link.href.substring(1) ? 'text-accent' : 'text-text-primary'}`}
                                >
                                   <span className="text-accent block mb-1">0{index + 1}.</span> {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                 <div className="p-8 text-center opacity-0" style={{ animation: isOpen ? 'fadeInUp 0.5s ease-out 0.5s forwards' : 'none' }}>
                    <div className="flex items-center justify-center space-x-8">
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary hover:text-accent transition-colors duration-300">
                            <GithubIcon />
                        </a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary hover:text-accent transition-colors duration-300">
                            <LinkedinIcon />
                        </a>
                    </div>
                </div>
            </aside>
        </header>
    );
};

export default Header;