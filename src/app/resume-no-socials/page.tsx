'use client';

import React from 'react';
import MathematicalMosaic from '@/components/MathematicalMosaic';
import '@/components/MathematicalMosaic.css';

export default function ResumeNoSocialsPage() {
  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div className="container">
      <header className="mosaic-header"> 
        <MathematicalMosaic name="Maxim Gagnon" />
        <div className="header-content">
          <h2>Senior QA Analyst & AI Integration Specialist</h2>
          <p className="contact-info">
            📧 <a href="mailto:maxim.gagnon.mg@gmail.com">maxim.gagnon.mg@gmail.com</a> &nbsp;&nbsp; | &nbsp;&nbsp; 📱 +387 (0)61-319-058
          </p>
          <p className="remote-info">💼 Remote-Ready • Cost-Effective</p>
          <div className="why-choose-max">
            <h3>🚀 Why Choose Max?</h3>
            <ul>
              <li><strong>Proven ROI:</strong> 5+ years delivering quality results at 40-60% below North American rates</li>
              <li><strong>AI-Native:</strong> Already leveraging LLMs and automation tools to increase productivity 10x</li>
              <li><strong>Zero Learning Curve:</strong> Hit the ground running from day one with enterprise-level testing experience</li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section className="summary">
          <p>Results-driven QA Analyst with 5+ years of hands-on experience in manual and automated testing for web and mobile applications. Early adopter of AI/LLM integration for enhanced testing workflows and documentation. Cost-effective remote specialist with strong work ethic and shameless commitment to leveraging cutting-edge tools for maximum efficiency.</p>
        </section>

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

        <section className="education">
          <h2>Education & Certifications</h2>
          <div className="school">
            <h3>🤗 Hugging Face AI Agents Course - Hugging Face</h3>
            <p><em>2024 • Advanced AI Agent Development & Implementation</em></p>
          </div>
          <div className="school">
            <h3>CCP Diploma - Credit Institute of Canada</h3>
            <p><em>2009 - 2012 • Professional Credit Management Certification</em></p>
          </div>
          <div className="school">
            <h3>Business Administration - CEGEP de Drummondville</h3>
            <p><em>2000 • Foundation Courses</em></p>
          </div>
          <div className="school">
            <h3>Business Administration - CEGEP de Trois-Rivières</h3>
            <p><em>1995 - 1998 • Core Business Fundamentals</em></p>
          </div>
        </section>

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

        <div className="keywords-section">
          <h3>🔍 ATS Keywords & Technologies</h3>
          <div className="keywords">
            <span className="keyword">Quality Assurance</span>
            <span className="keyword">Software Testing</span>
            <span className="keyword">Manual Testing</span>
            <span className="keyword">Bug Tracking</span>
            <span className="keyword">Test Cases</span>
            <span className="keyword">Regression Testing</span>
            <span className="keyword">Web Testing</span>
            <span className="keyword">Mobile Testing</span>
            <span className="keyword">Android</span>
            <span className="keyword">API Testing</span>
            <span className="keyword">Insomnia</span>
            <span className="keyword">REST API</span>
            <span className="keyword">HTTP Testing</span>
            <span className="keyword">JSON Validation</span>
            <span className="keyword">SQL</span>
            <span className="keyword">Jira</span>
            <span className="keyword">Agile</span>
            <span className="keyword">Scrum</span>
            <span className="keyword">Python</span>
            <span className="keyword">Git</span>
            <span className="keyword">Context Engineering</span>
            <span className="keyword">Windsurf</span>
            <span className="keyword">CI/CD</span>
            <span className="keyword">Git</span>
            <span className="keyword">Documentation</span>
            <span className="keyword">Release Notes</span>
            <span className="keyword">User Acceptance Testing</span>
            <span className="keyword">UAT</span>
            <span className="keyword">Test Planning</span>
            <span className="keyword">Defect Management</span>
            <span className="keyword">Cross-browser Testing</span>
            <span className="keyword">Performance Testing</span>
            <span className="keyword">Data Analysis</span>
            <span className="keyword">Process Improvement</span>
            <span className="keyword">Customer Support</span>
            <span className="keyword">Technical Writing</span>
            <span className="keyword">Troubleshooting</span>
            <span className="keyword">Remote Work</span>
            <span className="keyword">AI Integration</span>
            <span className="keyword">Hugging Face</span>
            <span className="keyword">AI Agents</span>
            <span className="keyword">Machine Learning</span>
            <span className="keyword">ML Workflows</span>
            <span className="keyword">Large Language Models</span>
            <span className="keyword">Automation</span>
            <span className="keyword">Bilingual</span>
          </div>
        </div>
      </main>

      <footer>
        <button id="download-pdf" onClick={handleDownloadPdf}>Download as PDF</button>
      </footer>
    </div>
  );
}
