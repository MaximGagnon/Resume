import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <div className="job">
        <h3>QA Analyst & AI Integration Specialist - Windsurf</h3>
        <p><em>Remote • 2023 - Present</em></p>
        <ul>
          <li><strong>AI-Powered Testing:</strong> Pioneered the use of AI agents in the QA process, improving bug detection efficiency by 40% and assisting in the development of AI-driven testing workflows.</li>
          <li><strong>API & Web Testing:</strong> Executed comprehensive manual testing on web and mobile platforms, specializing in API validation using Insomnia to ensure data integrity and system reliability.</li>
          <li><strong>Bug Lifecycle Management:</strong> Identified, documented, and tracked over 500 critical bugs using Jira, collaborating with development teams to ensure timely resolution and software stability.</li>
          <li><strong>Technical Documentation:</strong> Authored and maintained detailed release notes and technical documentation, ensuring clarity and consistency for both internal teams and external users.</li>
          <li><strong>User Acceptance Testing (UAT):</strong> Led UAT sessions with stakeholders to validate new features against business requirements, achieving a 98% user satisfaction rate.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Credit & Collection Analyst - Varitron</h3>
        <p><em>Saint-Hubert, QC • 2012 - 2023</em></p>
        <ul>
          <li><strong>Data Reconciliation:</strong> Managed complex financial data reconciliations, ensuring 99.9% accuracy in accounts receivable.</li>
          <li><strong>Process Optimization:</strong> Automated key reporting processes, reducing manual effort by 25 hours per month.</li>
          <li><strong>Risk Analysis:</strong> Conducted in-depth credit risk assessments for a portfolio of over 300 clients.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Credit Analyst - Hewitt Équipement</h3>
        <p><em>Pointe-Claire, QC • 2008 - 2012</em></p>
        <ul>
          <li><strong>Credit Processing:</strong> Evaluated and approved credit applications up to $50K, maintaining 2% default rate</li>
          <li><strong>Collections Management:</strong> Executed collection strategies for overdue accounts, recovering 85% of outstanding balances</li>
          <li><strong>Relationship Management:</strong> Maintained strong client relationships while enforcing company policies</li>
          <li><strong>Cross-department Collaboration:</strong> Worked closely with sales teams to facilitate smooth business operations</li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
