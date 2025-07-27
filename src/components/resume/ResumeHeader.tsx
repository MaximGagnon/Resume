import React from 'react';
import MathematicalMosaic from '../mosaic/MathematicalMosaic';
import TextGradient from '../TextGradient';
import '../mosaic/MathematicalMosaic.css';

const ResumeHeader = () => {
  return (
    <header className="mosaic-header">
      <MathematicalMosaic />
      <div className="header-content">
        <TextGradient text="Maxim Gagnon" />
        <h2>QA Analyst & AI Enthusiast</h2>
        <p className="contact-info">
          <a href="mailto:maxim.gagnon.mg@gmail.com">maxim.gagnon.mg@gmail.com</a> &nbsp;&nbsp; | &nbsp;&nbsp; +387 (0)61-319-058
        </p>
        <p className="remote-info"> Remote-Ready • Cost-Effective</p>
        <div className="why-choose-max">
          <h3>🚀 Why Choose Max?</h3>
          <ul>
            <li><strong>Proven ROI:</strong> 5+ years delivering quality results</li>
            <li><strong>AI-Native:</strong> Already leveraging LLMs and automation tools to increase productivity</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
