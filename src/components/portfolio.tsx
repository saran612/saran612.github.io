
"use client";

import React from 'react';
import ProjectCard from './project-card';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product management, shopping cart, and payment integration.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Web App', 'React', 'Node.js'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'e-commerce website'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A sleek and intuitive task management application to boost productivity.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Web App', 'Next.js', 'UI/UX'],
    liveUrl: '#',
    repoUrl: 'https://github.com/saran612/Arise',
    dataAiHint: 'task management'
  },
  {
    id: 3,
    title: 'Mobile Fitness Tracker',
    description: 'A cross-platform mobile app to track workouts, set goals, and monitor progress.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Mobile App', 'React Native'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'fitness app'
  },
  {
    id: 4,
    title: 'Corporate Website Redesign',
    description: 'A complete redesign of a corporate website focusing on modern UI/UX principles and brand identity.',
    image: 'https://placehold.co/600x400.png',
    tags: ['UI/UX', 'Figma'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'corporate website'
  },
  {
    id: 5,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js and React.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Web App', 'Data Viz'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'data dashboard'
  },
  {
    id: 6,
    title: 'Social Media Mobile App',
    description: 'A concept design for a new social media platform, focusing on user engagement and intuitive navigation.',
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
          <span className="text-black">My Portfolio</span>
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
