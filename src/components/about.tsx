
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-secondary py-20 px-4 md:px-[50px] printable-area flex items-center" style={{ minHeight: '500px' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-8xl font-geomanist font-bold text-center mb-12">
          <span className="text-black">About Me</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-stretch">
          <div className="md:col-span-1">
            <Card className="overflow-hidden shadow-xl rounded-lg border-2 border-primary/10 h-full">
              <Image 
                src="https://placehold.co/400x500.png"
                alt="Saran Karthick working"
                width={400}
                height={500}
                className="w-full object-cover h-full"
                data-ai-hint="developer coding"
              />
            </Card>
          </div>
          <div className="md:col-span-2 flex flex-col">
            <Card className="flex-grow flex flex-col">
              <CardContent className="pt-6 flex-grow flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Hi, I’m Saran Karthick</h3>
                <p className="text-lg md:text-xl text-primary mb-4 font-semibold">I create intelligent web experiences.</p>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">
                  I am a passionate Computer Science and Business Systems undergraduate at Bannari Amman Institute of Technology, and my passion lies at the intersection of web development, artificial intelligence, and automation.
                  <br />
                  <br />
                  From experimenting with machine learning models to building full-stack applications, I’ve always been fascinated by turning complex challenges into elegant solutions.
                  <br />
                  <br />
                  My journey started with curiosity about how machines learn, which led me to explore ML algorithms, AI automation tools, and full-stack development frameworks. Today, I enjoy creating projects that merge AI with web technologies, making a tangible impact.
                  <br />
                  <br />
                  Currently, I am exploring Deep Learning (DL) and Reinforcement Learning (RL) to expand my expertise in cutting-edge AI techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
