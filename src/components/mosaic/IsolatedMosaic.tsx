'use client';

import React, { useRef, useEffect } from 'react';
import './MathematicalMosaic.css';

interface IsolatedMosaicProps {
  drawFunction: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
}

const IsolatedMosaic: React.FC<IsolatedMosaicProps> = ({ drawFunction }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const container = canvas.parentElement;
      if (!container) return;

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      drawFunction(ctx, canvas.width, canvas.height);
    };

    const handleResize = () => {
      draw();
    };

    draw();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFunction]);

  return <canvas ref={canvasRef} />;
};

export default IsolatedMosaic;
