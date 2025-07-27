'use client';

import React from 'react';
import IsolatedMosaic from '../../../components/mosaic/IsolatedMosaic';
import { drawTrigWaves } from '../../../components/mosaic/drawing-utils';
import '../page.css';

const TrigWavesPage = () => {
  return (
    <div className="mosaic-container">
      <IsolatedMosaic drawFunction={drawTrigWaves} />
    </div>
  );
};

export default TrigWavesPage;
