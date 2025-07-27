'use client';

import React from 'react';
import IsolatedMosaic from '../../../components/mosaic/IsolatedMosaic';
import { drawBackground } from '../../../components/mosaic/drawing-utils';
import '../page.css';

const BackgroundPage = () => {
  return (
    <div className="mosaic-container">
      <IsolatedMosaic drawFunction={drawBackground} />
    </div>
  );
};

export default BackgroundPage;
