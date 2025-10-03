
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <SectionTitle number="02" title="Projetos em Destaque" />
            <div className="mt-12 space-y-16">
                {PROJECTS_DATA.map((project, index) => (
                    <ProjectCard key={project.id} project={project} reverse={index % 2 !== 0} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
