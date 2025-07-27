'use client';

import React from 'react';
import IsolatedMosaic from '../../../components/mosaic/IsolatedMosaic';
import { drawTessellation } from '../../../components/mosaic/drawing-utils';
import '../page.css';

const TessellationPage = () => {
  return (
    <div className="mosaic-container">
      <IsolatedMosaic drawFunction={drawTessellation} />
    </div>
  );
};

export default TessellationPage;
