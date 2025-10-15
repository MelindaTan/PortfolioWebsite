import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "OpenAI", 
    "SolidWorks", 
    "NX", 
    "PolyWorks", 
    "PTC Creo", 
    "Onshape", 
];

const labelsSecond = [
    "TensorFlow",
    "OpenCV",
    "Pytorch",
    "MATLAB",
    "Python"
];

const labelsThird = [
    "React",
    "React Native",
    "Angular",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "Figma",
    "C++", 
    "Java",
    "JavaScript"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Engineering & Robotics </h3>
                    <p>I have a strong background in mechanical and software engineering, specializing in CAD modeling, prototyping, and automation. My experience spans robotics systems, industrial design processes, and integrated software-hardware solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Machine Learning & AI Integration</h3>
                    <p>I applied machine learning models and AI frameworks to real-world problems, focusing on data analysis, predictive modeling, and computer vision. I am skilled at working across the full ML pipeline, from dataset preparation to model deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Full Stack</h3>
                    <p>I designed and built user-focused web applications by combining modern front-end frameworks with clean UI/UX principles. I am experienced in both development and deployment workflows, including version control and responsive design.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;