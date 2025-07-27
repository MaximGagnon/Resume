import React from 'react';
import './TextGradient.css';

interface TextGradientProps {
  text: string;
}

const TextGradient: React.FC<TextGradientProps> = ({ text }) => {
  return (
    <div className="gradient-text-container">
      <h1 className="gradient-text">{text}</h1>
    </div>
  );
};

export default TextGradient;
