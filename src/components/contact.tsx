
"use client";

import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/saran612',
    icon: <Github className="h-6 w-6 md:h-8 md:w-8 social-link-icon" />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saran-karthick612/',
    icon: <Linkedin className="h-6 w-6 md:h-8 md:w-8 social-link-icon" />,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/saran_0612',
    icon: <Twitter className="h-6 w-6 md:h-8 md:w-8 social-link-icon" />,
  },
  {
    name: 'Gmail',
    href: 'mailto:freelancexsaran@gmail.com',
    icon: <Mail className="h-6 w-6 md:h-8 md:w-8 social-link-icon" />,
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@saran612',
    icon: (
      <span className="font-bold text-3xl md:text-4xl social-link-icon" style={{fontFamily: 'sans-serif'}}>
        M
      </span>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 printable-area min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <h2 className="text-6xl md:text-9xl font-geomanist font-bold">
          <span className="text-black">
            contact
          </span>
        </h2>
        <p className="text-xl md:text-2xl font-poppins text-muted-foreground mt-2">get in touch</p>
        <div className="flex items-center justify-center space-x-2 md:space-x-3 mt-8 group">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-muted-foreground transition-transform duration-300 ease-in-out 
                         group-hover:hover:!transform-none 
                         group-hover:has( ~ a:hover):-translate-x-2 md:group-hover:has( ~ a:hover):-translate-x-3
                         group-hover:hover ~ a:translate-x-2 md:group-hover:hover ~ a:translate-x-3"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
