import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-secondary/80 py-6 no-print">
      <div className="container mx-auto px-4 text-center text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Saran Karthick. All rights reserved.</p>
      </div>
    </footer>
  );
}
