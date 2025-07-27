'use client';

import React, { useRef, useEffect } from 'react';
import './MathematicalMosaic.css';
import {
  drawBackground,
  drawTessellation,
  drawFibonacciSpiral,
  drawTrigWaves,
  drawFractalTrees,
  drawMandalaAndName,
} from './drawing-utils';

interface MathematicalMosaicProps {
  name?: string;
}

const MathematicalMosaic: React.FC<MathematicalMosaicProps> = ({ name }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawArt = () => {
      const container = canvas.parentElement;
      if (!container) return;

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      const { width, height } = canvas;

      drawBackground(ctx, width, height);
      drawTessellation(ctx, width, height);
      drawFibonacciSpiral(ctx, width, height);
      drawTrigWaves(ctx, width, height);
      drawFractalTrees(ctx, width, height);
      drawMandalaAndName(ctx, width, height, name);
    };

    const handleResize = () => {
      drawArt();
    };

    drawArt();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [name]);

  return <canvas ref={canvasRef} className="mathematical-mosaic"></canvas>;
};

export default MathematicalMosaic;
