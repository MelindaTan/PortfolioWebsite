import React from "react";

import navy from '../assets/images/navy.png';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';



import '../assets/styles/Project.scss';
import { CarCrash } from "@mui/icons-material";

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://melindatan.github.io/Plant-Shop/" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://melindatan.github.io/Plant-Shop/" target="_blank" rel="noreferrer"><h2>Plant Shop</h2></a>
                <p>Developed a responsive plant shopping platform using React, featuring dynamic product listings, a shopping cart system, and a modern, user-friendly interface. Implemented component-based architecture to ensure scalability and maintainability.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MelindaTan/BurgerBashGame" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MelindaTan/BurgerBashGame" target="_blank" rel="noreferrer"><h2>BugerBash</h2></a>
                <p>Designed and implemented a dynamic Android game interface with interactive controls and seamless Java backend integration, enabling smooth gameplay. Utilized GitLab for version control and maintained clean, collaborative code throughout the project.</p>
            </div>
            <div className="project">
                <a href="http://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer"><h2>Pollution Prediction</h2></a>
                <p>Led a team in analyzing an air pollution dataset, utilizing machine learning techniques like classification and regression to identify trends and categories. Documented findings through multiple deliverables and published the final report in HTML format.</p>
            </div>
            <div className="project">
                <a href="http://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer"><h2>Produce Prediction</h2></a>
                <p>Retrieved and analyzed a fruit production dataset using Python libraries such as NumPy and Pandas to identify key trends in production, consumption, and attributes. Presented the results with clear annotations and published the findings for effective communication.</p>
            </div>
            <div className="project">
                <a href="http://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer"><img src={project5} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer"><h2>Automated Car</h2></a>
                <p>Leveraging integrated CAD design, advanced coding, and PID control systems, we developed an autonomous vehicle capable of executing complex tasks with precision and efficiency.</p>
            </div>
            <div className="project">
                <a href="https://flamefreeze.vercel.app/" target="_blank" rel="noreferrer"><img src={project6} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://flamefreeze.vercel.app/" target="_blank" rel="noreferrer"><h2>FlameFreeze</h2></a>
                <p>Developed a web platform that tracks active fires in Los Angeles using existing data from Google Firestat, predicts fire spread patterns, and automates firefighter response recommendations through predictive modeling.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;