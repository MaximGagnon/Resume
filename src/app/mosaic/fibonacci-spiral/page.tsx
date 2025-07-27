'use client';

import React from 'react';
import IsolatedMosaic from '../../../components/mosaic/IsolatedMosaic';
import { drawFibonacciSpiral } from '../../../components/mosaic/drawing-utils';
import '../page.css';

const FibonacciSpiralPage = () => {
  return (
    <div className="mosaic-container">
      <IsolatedMosaic drawFunction={drawFibonacciSpiral} />
    </div>
  );
};

export default FibonacciSpiralPage;
