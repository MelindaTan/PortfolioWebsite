import React from "react";
import '../assets/styles/Featured.scss';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import { Button } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

function Featured() {
    const projects = [
        {
            title: "Plant Shop",
            description: "A responsive e-commerce platform built with React, featuring dynamic product listings and a modern shopping cart system. Implements component-based architecture with seamless state management.",
            image: project1,
            tech: ["React", "JavaScript", "SCSS", "Context API"],
            liveLink: "https://melindatan.github.io/Plant-Shop/",
            githubLink: "https://github.com/MelindaTan/Plant-Shop"
        },
        {
            title: "BurgerBash",
            description: "An engaging Android game with interactive controls and Java backend integration. Features smooth gameplay mechanics and real-time score tracking.",
            image: project2,
            tech: ["Java", "Android Studio", "SQLite", "GitLab"],
            liveLink: "https://github.com/MelindaTan/BurgerBashGame",
            githubLink: "https://github.com/MelindaTan/BurgerBashGame"
        },
        {
            title: "Pollution Prediction",
            description: "Machine learning project analyzing air pollution data using classification and regression techniques. Implemented data visualization and predictive modeling.",
            image: project3,
            tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
            liveLink: "http://www.linkedin.com/in/melintran",
            githubLink: "http://www.linkedin.com/in/melintran"
        },
        {
            title: "FlameFreeze",
            description: "Web platform tracking active fires in Los Angeles using Google Firestat data. Features predictive modeling for fire spread patterns and automated response recommendations.",
            image: project4,
            tech: ["React", "Node.js", "Firebase", "Google Maps API"],
            liveLink: "https://flamefreeze.vercel.app/",
            githubLink: "https://flamefreeze.vercel.app/"
        }
        
    ];

    return (
        <div className="featured-container" id="projects">
            <div className="featured-content">
                <div className="section-header">
                    <h1>Projects</h1>
                    <Button 
                        variant="outlined" 
                        endIcon={<LaunchIcon />}
                        href="https://github.com/MelindaTan"
                        target="_blank"
                        className="view-all"
                    >
                        View All Projects
                    </Button>
                </div>
                <div className="featured-grid">
                    {projects.map((project, index) => (
                        <div className="featured-project" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.liveLink} target="_blank" rel="noreferrer">
                                            <LaunchIcon />
                                        </a>
                                        <a href={project.githubLink} target="_blank" rel="noreferrer">
                                            <GitHubIcon />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Featured; 