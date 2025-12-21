
"use client";

import React from 'react';
import CertificateCard from './certificate-card';
import type { Certificate } from '@/types';

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Gemini Student Certificate',
    issuer: 'Google',
    image: '/image/google_student_cetificate.jpg',
    verifyUrl: '#',
    dataAiHint: 'certificate document'
  },
  {
    id: 2,
    title: 'Supervised Machine Learning: Regression andClassification',
    issuer: 'Stanford Online',
    image: '/image/ML.jpg',
    verifyUrl: 'https://coursera.org/verify/G2RT9185EH5M',
    dataAiHint: 'certificate award'
  },
  {
    id: 3,
    title: 'Machine Learning with Python',
    issuer: 'FreeCodeCamp',
    image: '/image/Free_Code_Camp.jpg',
    verifyUrl: 'https://www.freecodecamp.org/certification/saran612/machine-learning-with-python-v7',
    dataAiHint: 'official certificate'
  },
  {
    id: 4,
    title: 'IBM Z Day 2025 - AI & Data',
    issuer: 'IBM',
    image: '/image/IBMZDay2025-AIData_Badge2025.jpg',
    verifyUrl: 'https://www.credly.com/go/U564RnEh',
    dataAiHint: 'official certificate'
  },
  {
    id: 5,
    title: 'Basics of Python',
    issuer: 'Infosys-Springboard',
    image: '/image/python.jpg',
    verifyUrl: ' https://verify.onwingspan.com',
    dataAiHint: 'official certificate'
  },
  {
    id: 6,
    title: 'JavaScript (Basic)',
    issuer: 'Hackerrank',
    image: '/image/javascript_basic.jpg',
    verifyUrl: '#',
    dataAiHint: 'official certificate'
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-background printable-area">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-8xl font-geomanist font-bold text-center mb-12">
          <span className="text-black">Certificates</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map(certificate => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
