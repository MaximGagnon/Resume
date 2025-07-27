'use client';

import React, { useRef, useEffect } from 'react';
import './MathematicalMosaic.css';

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

      const width = canvas.width;
      const height = canvas.height;
      const colors = ['#3b82f6', '#0ea5e9', '#06b6d4'];

      // 1. Background
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) / 1.5);
      gradient.addColorStop(0, '#0f172a');
      gradient.addColorStop(1, '#020617');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Tessellation
      const size = 40;
      for (let y = 0; y < height + size; y += size) {
        for (let x = 0; x < width + size; x += size) {
          ctx.beginPath();
          ctx.fillStyle = `hsla(${180 + Math.random() * 60}, 70%, 50%, 0.1)`;
          if (Math.random() > 0.5) {
            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
          } else {
            ctx.rect(x - size / 2, y - size / 2, size, size);
          }
          ctx.fill();
        }
      }

      // 3. Fibonacci Spiral
      const scale = Math.min(width, height) / 200;
      const angle = 137.5 * (Math.PI / 180);
      for (let n = 0; n < 500; n++) {
        const r = scale * Math.sqrt(n);
        const theta = n * angle;
        ctx.beginPath();
        ctx.arc(width / 2 + r * Math.cos(theta), height / 2 + r * Math.sin(theta), 1 + n * 0.005, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${200 + n * 0.1}, 80%, 65%, 0.5)`;
        ctx.fill();
      }

      // 4. Trig Waves
      const functions = [
          { func: Math.sin, color: colors[0], amp: height/20, freq: 0.02 },
          { func: Math.cos, color: colors[1], amp: height/18, freq: 0.015 },
      ];
      functions.forEach(f => {
          ctx.beginPath();
          ctx.strokeStyle = `${f.color}80`;
          ctx.lineWidth = 2;
          for (let x = 0; x < width; x++) {
              const y = height / 2 + f.func(x * f.freq) * f.amp;
              if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
      });

      // 5. Fractal Trees
      const drawFractalTree = (x: number, y: number, angle: number, depth: number, branchLength: number) => {
        if (depth < 2) return;
        const endX = x + Math.cos(angle) * branchLength;
        const endY = y + Math.sin(angle) * branchLength;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `hsla(195, 80%, ${60 - depth * 3}%, ${0.15 + depth * 0.08})`;
        ctx.lineWidth = depth * 0.7;
        ctx.stroke();
        drawFractalTree(endX, endY, angle - 0.5, depth - 1, branchLength * 0.8);
        drawFractalTree(endX, endY, angle + 0.5, depth - 1, branchLength * 0.8);
      };
      drawFractalTree(width * 0.2, height, -Math.PI / 2, 7, height / 15);
      drawFractalTree(width * 0.8, height, -Math.PI / 2, 7, height / 15);

      // 6. Mandala & Name
      const symbols = ['∫', '∂', '∇', '∞', '≈', '≡', '⊕', '⊗', '∪', '∩', '∈', '⊂'];
      ctx.save();
      ctx.translate(width / 2, height / 2);
      symbols.forEach((symbol, i) => {
          const angle = (i / symbols.length) * 2 * Math.PI;
          ctx.save();
          ctx.rotate(angle);
          ctx.font = `${Math.min(width, height) / 25}px serif`;
          ctx.fillStyle = 'hsla(210, 70%, 80%, 0.6)';
          ctx.textAlign = 'center';
          ctx.fillText(symbol, 0, -Math.min(width, height) / 4);
          ctx.restore();
      });
      if (name) {
        ctx.font = `bold ${Math.min(width, height) / 12}px -apple-system, sans-serif`;
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(59, 130, 246, 0.7)';
        ctx.shadowBlur = 25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(name, 0, 0);
      }
      ctx.restore();
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
