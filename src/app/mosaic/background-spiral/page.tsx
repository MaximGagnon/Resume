'use client';

import React from 'react';
import IsolatedMosaic from '../../../components/mosaic/IsolatedMosaic';
import { drawBackgroundAndSpiral } from '../../../components/mosaic/drawing-utils';
import '../page.css';

const BackgroundSpiralPage = () => {
  return (
    <div className="mosaic-container">
      <IsolatedMosaic drawFunction={drawBackgroundAndSpiral} />
    </div>
  );
};

export default BackgroundSpiralPage;
