
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { ExternalLink, Eye, ZoomIn, ZoomOut, X } from 'lucide-react';
import type { Certificate } from '@/types';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <>
      <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-primary/10 h-full">
        <CardHeader className="p-0">
          <div className="aspect-video relative">
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-cover"
              data-ai-hint={certificate.dataAiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
            <CardTitle className="font-headline text-2xl mb-2">{certificate.title}</CardTitle>
            <p className="text-foreground/80 font-light">{certificate.issuer}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex items-center space-x-4">
            <Button onClick={() => setIsViewerOpen(true)}>
              <Eye className="mr-2 h-4 w-4" /> View
            </Button>
            {certificate.verifyUrl && (
              <Button asChild variant="outline">
                <a href={certificate.verifyUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Verify
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-transparent border-0 flex flex-col items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center overflow-auto">
             <Image
                src={certificate.image}
                alt={certificate.title}
                width={1200 * zoomLevel}
                height={800 * zoomLevel}
                className="transition-transform duration-300"
              />
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
             <Button size="icon" onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.2))}>
              <ZoomOut />
             </Button>
             <Button size="icon" onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.2))}>
              <ZoomIn />
             </Button>
            <Button size="icon" variant="destructive" onClick={() => { setIsViewerOpen(false); setZoomLevel(1);}}>
              <X />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
