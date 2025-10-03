import React from 'react';
import { SKILLS_DATA } from '../constants';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <SectionTitle number="02" title="Minhas Habilidades" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {SKILLS_DATA.map((category) => (
                    <div key={category.title} className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-accent/10 transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-text-primary mb-4">{category.title}</h3>
                        <ul className="space-y-3">
                            {category.skills.map((skill) => (
                                <li key={skill.name} className="flex items-center text-text-secondary">
                                    <span className="text-accent mr-3">{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;