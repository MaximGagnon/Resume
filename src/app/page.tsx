'use client';

import React from 'react';
import Link from 'next/link';
import MathematicalMosaic from '../components/mosaic/MathematicalMosaic';
import '../components/mosaic/MathematicalMosaic.css';
import './landing.css';

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-mosaic-background">
        <MathematicalMosaic />
      </div>
      <div className="landing-content">
        <h1 className="landing-title">Maxim Gagnon</h1>
        <p className="landing-subtitle">AI Enthusiast</p>
        <Link href="/resume" className="landing-button">
          View My Resume
        </Link>
      </div>
    </div>
  );
}
