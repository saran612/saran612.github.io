"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [textIndex, setIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState('');
  const [isDeleting, setDeleting] = React.useState(false);
  
  React.useEffect(() => {
    const texts = ["Building & Learning", "B.Tech Student", "ML Engineer"];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delay = 2000;

    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          setDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setDeleting(true), delay);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <section 
      id="home" 
      className="container mx-auto px-4 text-center flex flex-col items-center justify-center min-h-screen printable-area"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-lequire text-6xl md:text-8xl mb-4 text-black">
          Saran Karthick
        </h1>
        <div className="h-12 flex items-center justify-center">
            <p className="font-sarcolenta text-2xl md:text-4xl text-muted-foreground mb-8 max-w-2xl" style={{ color: '#333333' }}>
              {displayedText}
              <span className="animate-ping">|</span>
            </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          <Button asChild size="lg" className="text-lg">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button size="lg" asChild variant="outline" className="text-lg">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
