
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/saran612', label: 'Github' },
  { href: 'https://leetcode.com/u/saran0612', label: 'LeetCode' },
  { href: 'https://www.linkedin.com/in/saran-karthick612/', label: 'LinkedIn' },
  { href: 'https://x.com/saran_0612', label: 'Twitter' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay to appear after the main title
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const homeSection = document.querySelector('#home');
      const scrollPosition = window.scrollY + 150; // Offset for better accuracy
      
      if (homeSection && (homeSection as HTMLElement).offsetTop <= scrollPosition && (homeSection as HTMLElement).offsetTop + (homeSection as HTMLElement).offsetHeight > scrollPosition) {
        setActiveLink('#home');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active link

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'no-print fixed left-0 right-0 z-50 transition-all duration-300 opacity-0',
        isVisible && 'fade-in',
        isScrolled || isMenuOpen ? 'top-0 bg-background/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="mx-auto px-[3vw]">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-poppins text-xs md:text-sm font-medium transition-colors',
                    activeLink === link.href ? 'text-primary' : 'text-foreground/75 hover:text-primary'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
             <Link href="#home" className="text-2xl md:text-3xl font-lequire text-foreground">
             Saran
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
             {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label} 
                  className="font-poppins text-xs md:text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
             ))}
          </div>

          <div className="md:hidden flex-1 flex justify-end">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              {isMenuOpen ? <X /> : <Menu />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-6 py-4 border-t">
            <Link href="#home" className="text-3xl font-lequire text-foreground" onClick={() => setIsMenuOpen(false)}>
              SARAN
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'font-poppins text-sm font-medium transition-colors',
                  activeLink === link.href ? 'text-primary' : 'text-foreground/75 hover:text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-8 pt-4">
               {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label} 
                  className="font-poppins text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
               ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
