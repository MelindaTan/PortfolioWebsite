import React from "react";
import { motion } from 'framer-motion';
import '../assets/styles/Resume.scss';

function Resume() {
  return (
    <div className="resume-container" id="resume">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1>Resume</h1>
        <p>
          Download my resume to see a full overview of my experience, skills, and accomplishments.
        </p>
        <div className="resume-actions">
          <a
            className="resume-button"
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
