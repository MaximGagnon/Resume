'use client';

import React from 'react';
import IsolatedMosaic from '../../../components/mosaic/IsolatedMosaic';
import { drawFractalTrees } from '../../../components/mosaic/drawing-utils';
import '../page.css';

const FractalTreesPage = () => {
  return (
    <div className="mosaic-container">
      <IsolatedMosaic drawFunction={drawFractalTrees} />
    </div>
  );
};

export default FractalTreesPage;
