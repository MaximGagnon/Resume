'use client';

import React from 'react';
import ResumeHeader from '../../components/resume/ResumeHeader';
import ExperienceSection from '../../components/resume/ExperienceSection';
import EducationSection from '../../components/resume/EducationSection';
import SkillsSection from '../../components/resume/SkillsSection';
import KeywordsSection from '../../components/resume/KeywordsSection';
import ResumeFooter from '../../components/resume/ResumeFooter';

export default function ResumePage() {
  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div className="container">
      <ResumeHeader />
      <main>
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <KeywordsSection />
      </main>
      <ResumeFooter onDownloadPdf={handleDownloadPdf} />
    </div>
  );
}
