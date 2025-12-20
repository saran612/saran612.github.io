
"use client";

import React from 'react';
import ProjectCard from './project-card';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Metro-Mind AI',
    description: 'A decision-support dashboard and real-time train scheduling for the Kochi Metro.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'React', 'TensorFlow'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'dashboard website'
  },
  {
    id: 2,
    title: 'Memora',
    description: 'A Retrieval-Augmented Generation (RAG) for personal knowledge management capabilities.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'LangChain', 'Vector Embeddings', 'LLM'],
    liveUrl: '#',
    repoUrl: 'https://github.com/saran612/Arise',
    dataAiHint: 'RAG'
  },
  {
    id: 3,
    title: 'AgriQCert',
    description: 'A end-to-end platform for a digital product passport system for agricultural imports and exports.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'React.js', 'SQL'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'AgriQCert app'
  },
  {
    id: 4,
    title: 'Dark-Cloud',
    description: 'A social platform for connecting like-minds around the world.',
    image: 'https://placehold.co/600x400.png',
    tags: ['UI/UX', 'Figma'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'corporate website'
  },
  {
    id: 5,
    title: 'Arise',
    description: 'An interactive productivity tracker web app.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Web App', 'Data Viz'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'data dashboard'
  },
  {
    id: 6,
    title: 'Drift',
    description: 'A hybrid learning platform combining AI and interactive content.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Mobile App', 'UI/UX'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'social media'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 printable-area">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-8xl font-geomanist font-bold text-center mb-12">
          <span className="text-black">My Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
