import React from 'react';
import './TextGradient.css';

export default function TextGradient({ text }: { text: string }) {
  return (
    <h1 className="gradient-text">
      {text}
    </h1>
  );
}
