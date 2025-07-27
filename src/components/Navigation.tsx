'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isOpen && (
        <ul className="nav-links">
          <li>
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="/resume" onClick={toggleMenu}>Resume</Link>
          </li>
          <li>
            <Link href="/mosaic" onClick={toggleMenu}>Mosaic</Link>
          </li>
          <li>
            <Link href="/mosaic/background" onClick={toggleMenu}>- Background</Link>
          </li>
          <li>
            <Link href="/mosaic/tessellation" onClick={toggleMenu}>- Tessellation</Link>
          </li>
          <li>
            <Link href="/mosaic/fibonacci-spiral" onClick={toggleMenu}>- Fibonacci Spiral</Link>
          </li>
          <li>
            <Link href="/mosaic/trig-waves" onClick={toggleMenu}>- Trig Waves</Link>
          </li>
          <li>
            <Link href="/mosaic/fractal-trees" onClick={toggleMenu}>- Fractal Trees</Link>
          </li>
          <li>
            <Link href="/mosaic/mandala" onClick={toggleMenu}>- Mandala</Link>
          </li>
          <li>
            <Link href="/mosaic/background-spiral" onClick={toggleMenu}>- BG + Spiral</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
