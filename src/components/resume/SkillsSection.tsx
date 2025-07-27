import React from 'react';

const SkillsSection = () => {
  return (
    <section className="skills">
      <h2>Technical Skills & Expertise</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h4>QA & Testing</h4>
          <ul>
            <li>Manual Testing</li>
            <li>API Testing (Insomnia, REST)</li>
            <li>Web Application Testing</li>
            <li>Mobile App Testing (Android)</li>
            <li>Bug Analysis & Reporting</li>
            <li>Test Case Design</li>
            <li>Regression Testing</li>
            <li>User Acceptance Testing</li>
            <li>HTTP/JSON Validation</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>AI & Automation</h4>
          <ul>
            <li>Large Language Models (LLMs)</li>
            <li>Hugging Face Ecosystem</li>
            <li>AI Agents & Workflows</li>
            <li>Python Programming</li>
            <li>Context Engineering</li>
            <li>Prompt Engineering</li>
            <li>AI-Assisted Testing</li>
            <li>Automated Documentation</li>
            <li>ChatGPT/Claude Integration</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Technical Tools</h4>
          <ul>
            <li>Insomnia REST Client</li>
            <li>Python Programming</li>
            <li>SQL Querying</li>
            <li>Git Version Control</li>
            <li>Windsurf IDE</li>
            <li>Microsoft Navision/Dynamics</li>
            <li>Zoho Desk</li>
            <li>Cognos Business Intelligence</li>
            <li>Excel/Google Sheets (Advanced)</li>
            <li>Jira/Bug Tracking</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Business Skills</h4>
          <ul>
            <li>Agile/Scrum Methodology</li>
            <li>Data Analysis & Reconciliation</li>
            <li>Financial Data Analysis</li>
            <li>Process Optimization</li>
            <li>Cross-functional Collaboration</li>
            <li>Customer Support</li>
            <li>Bilingual (English/French)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
