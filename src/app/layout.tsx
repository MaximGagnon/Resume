import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/public/style.css";
import Navigation from '../components/Navigation';
import '../components/Navigation.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxim Gagnon - QA Analyst & AI Specialist",
  description: "Resume for Maxim Gagnon, a QA Analyst and AI Specialist with expertise in manual testing, API testing, and AI-driven automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
