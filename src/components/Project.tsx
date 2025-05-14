import React from "react";
import { motion } from 'framer-motion';
import { HoverScale } from './animations';

import navy from '../assets/images/navy.png';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';

import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h2>
            <div className="projects-grid">

                <motion.div 
                    className="project"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <HoverScale>
                        <a href="https://melindatan.github.io/Plant-Shop/" target="_blank" rel="noreferrer">
                            <motion.img 
                                src={project1} 
                                className="zoom" 
                                alt="thumbnail" 
                                width="100%"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </a>
                        <motion.h2 
                            className="dark-title"
                            whileHover={{ color: '#FFC0CB' }}
                        >
                            Plant Shop
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Developed a responsive plant shopping platform using React, featuring dynamic product listings, a shopping cart system, and a modern, user-friendly interface. Implemented component-based architecture to ensure scalability and maintainability.
                        </motion.p>
                    </HoverScale>
                </motion.div>

                <motion.div 
                    className="project"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <HoverScale>
                        <a href="https://github.com/MelindaTan/BurgerBashGame" target="_blank" rel="noreferrer">
                            <motion.img 
                                src={project2} 
                                className="zoom" 
                                alt="thumbnail" 
                                width="100%"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </a>
                        <motion.h2 
                            className="dark-title"
                            whileHover={{ color: '#FFC0CB' }}
                        >
                            BurgerBash
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Designed and implemented a dynamic Android game interface with interactive controls and seamless Java backend integration, enabling smooth gameplay. Utilized GitLab for version control and maintained clean, collaborative code throughout the project.
                        </motion.p>
                    </HoverScale>
                </motion.div>

                <motion.div 
                    className="project"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <HoverScale>
                        <a href="http://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer">
                            <motion.img 
                                src={project3} 
                                className="zoom" 
                                alt="thumbnail" 
                                width="100%"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </a>
                        <motion.h2 
                            className="dark-title"
                            whileHover={{ color: '#FFC0CB' }}
                        >
                            Pollution Prediction
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Led a team in analyzing an air pollution dataset, utilizing machine learning techniques like classification and regression to identify trends and categories. Documented findings through multiple deliverables and published the final report in HTML format.
                        </motion.p>
                    </HoverScale>
                </motion.div>

                <motion.div 
                    className="project"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <HoverScale>
                        <a href="http://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer">
                            <motion.img 
                                src={project4} 
                                className="zoom" 
                                alt="thumbnail" 
                                width="100%"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </a>
                        <motion.h2 
                            className="dark-title"
                            whileHover={{ color: '#FFC0CB' }}
                        >
                            Produce Prediction
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Retrieved and analyzed a fruit production dataset using Python libraries such as NumPy and Pandas to identify key trends in production, consumption, and attributes. Presented the results with clear annotations and published the findings for effective communication.
                        </motion.p>
                    </HoverScale>
                </motion.div>

                <motion.div 
                    className="project"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <HoverScale>
                        <a href="http://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer">
                            <motion.img 
                                src={project5} 
                                className="zoom" 
                                alt="thumbnail" 
                                width="100%"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </a>
                        <motion.h2 
                            className="dark-title"
                            whileHover={{ color: '#FFC0CB' }}
                        >
                            Automated Car
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            Leveraging integrated CAD design, advanced coding, and PID control systems, we developed an autonomous vehicle capable of executing complex tasks with precision and efficiency.
                        </motion.p>
                    </HoverScale>
                </motion.div>

                <motion.div 
                    className="project"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <HoverScale>
                        <a href="https://flamefreeze.vercel.app/" target="_blank" rel="noreferrer">
                            <motion.img 
                                src={project6} 
                                className="zoom" 
                                alt="thumbnail" 
                                width="100%"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </a>
                        <motion.h2 
                            className="dark-title"
                            whileHover={{ color: '#FFC0CB' }}
                        >
                            FlameFreeze
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Developed a web platform that tracks active fires in Los Angeles using existing data from Google Firestat, predicts fire spread patterns, and automates firefighter response recommendations through predictive modeling.
                        </motion.p>
                    </HoverScale>
                </motion.div>
            </div>
        </div>
    );
}

export default Project;
