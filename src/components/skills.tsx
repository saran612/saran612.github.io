
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python' },
      { name: 'C/C++' },
      { name: 'Java' },
      { name: 'JavaScript/TypeScript' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML/CSS' },
      { name: 'React' },
      { name: 'Node.js' },
    ],
  },
  {
    title: 'AI/ML',
    skills: [
      { name: 'TensorFlow' },
      { name: 'PyTorch' },
      { name: 'Scikit-learn' },
    ],
  },
  {
    title: 'Tools',
    skills: [
        { name: 'Figma' },
        { name: 'Git' },
        { name: 'Docker' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary printable-area flex items-center min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-8xl font-geomanist font-bold text-center mb-12">
          <span className="text-black">Skills</span>
        </h2>
        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/90 relative">
                {category.title}
                <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-primary/30"></span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.skills.map((skill) => (
                  <Card key={skill.name} className="skill-card group p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="flex justify-center items-center">
                        <span className="text-sm md:text-base font-medium text-foreground/90">{skill.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
