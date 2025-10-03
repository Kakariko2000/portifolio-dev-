
import type React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  caseStudy: {
    problem: string;
    solution: string;
    tech: string;
  };
}
