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
            <Link href="/" onClick={toggleMenu}>Resume with Socials</Link>
          </li>
          <li>
            <Link href="/resume-no-socials" onClick={toggleMenu}>Resume without Socials</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
