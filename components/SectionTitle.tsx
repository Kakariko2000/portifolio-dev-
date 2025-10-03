import React from 'react';

interface SectionTitleProps {
    number: string;
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title }) => {
    return (
        <div className="flex items-center space-x-4">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary whitespace-nowrap">
                <span className="text-accent font-mono text-xl md:text-2xl">{number}.</span> {title}
            </h2>
            <div className="w-full h-px bg-secondary"></div>
        </div>
    );
};

export default SectionTitle;