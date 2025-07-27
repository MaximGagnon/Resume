import React from 'react';

interface ResumeFooterProps {
  onDownloadPdf: () => void;
}

const ResumeFooter: React.FC<ResumeFooterProps> = ({ onDownloadPdf }) => {
  return (
    <footer>
      <button id="download-pdf" onClick={onDownloadPdf}>Download as PDF</button>
    </footer>
  );
};

export default ResumeFooter;
