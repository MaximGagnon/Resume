'use client';

import React from 'react';
import IsolatedMosaic from '../../../components/mosaic/IsolatedMosaic';
import { drawMandalaAndName } from '../../../components/mosaic/drawing-utils';
import '../page.css';

const MandalaPage = () => {
  const drawFunction = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    drawMandalaAndName(ctx, 300, 300, 'Maxim Gagnon');
  };

  return (
    <div className="mosaic-container">
      <IsolatedMosaic drawFunction={drawFunction} />
    </div>
  );
};

export default MandalaPage;
