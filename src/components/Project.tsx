import React, { useMemo } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HoverScale } from './animations';
import { projects } from '../data/projects';

import '../assets/styles/Project.scss';

const categoryTitles = {
      'full-stack': 'Full Stack Development',
      'hardware': 'Hardware & Embedded Systems',
      'ai-data': 'Machine Learning & Data Science'
};

const categoryOrder = ['full-stack', 'hardware', 'ai-data'];

function Project() {
    const navigate = useNavigate();
    
    const groupedProjects = useMemo(() => {
      const groups: Record<string, typeof projects> = {
        'full-stack': [],
        'hardware': [],
        'ai-data': []
      };
      
      projects.forEach(project => {
        const category = project.category || 'full-stack';
        if (category in groups) {
          groups[category].push(project);
        }
      });
      
      return groups;
    }, []);

    return (
        <div className="projects-container" id="projects">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h1>

            {categoryOrder.map((category, categoryIndex) => (
              groupedProjects[category].length > 0 && (
                <div key={category} className="project-category">
                  <motion.h2
                    className="category-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </motion.h2>
                  
                  <div className="projects-grid">
                    {groupedProjects[category].map((project, index) => (
                      <motion.div 
                        key={project.id}
                        className="project"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      >
                        <HoverScale>
                          <button onClick={() => navigate(`/project/${project.id}`)} className="project-button">
                            View Details
                          </button>
                          <motion.h3 
                            className="dark-title"
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          >
                            {project.shortDescription}
                          </motion.p>
                        </HoverScale>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            ))}
        </div>
    );
}

export default Project;
