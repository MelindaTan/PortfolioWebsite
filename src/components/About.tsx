import React from "react";
import TypewriterGreeting from "./TypewriterGreeting";
import '../assets/styles/About.scss';

function About() {
    return (
        <div className="about-container" id="about">
            <div className="about-content">
                <div className="eyebrow">ABOUT ME</div>
                <h1><TypewriterGreeting greeting="A little about me :)" /></h1>
                <div className="about-text">
                    <p>
                    Hello! I'm Melinda, a Computer Engineering and Computer Science student with a concentration in machine learning. My journey began in mechanical design and grew into software design. Understanding how physical systems work sparked my interest in writing the software that brings them to life.
                    </p>
                    <p>
                    I'm especially excited about software and AI for robotics. I love working on computer vision: helping robots interpret what they see, understand their surroundings, and use that information to navigate and interact with the world. My mechanical background helps me connect software decisions to how a robot behaves in practice.
                    </p>
                    <p>
                    I enjoy building the software behind intelligent robotic systems, from training perception models to integrating them with robot control systems. I want to keep exploring how computer vision and machine learning can make robots more capable and reliable, and I'm always eager to learn and collaborate with others working on these challenges.
                    </p>
                </div>
                <div className="key-points">
                    <div className="point">
                        <h3>Education</h3>
                        <p>Computer Engineering & Computer Science & ML Concentration</p>
                        <p>Boston University 2027</p>
                    </div>
                    <div className="point">
                        <h3>Interests</h3>
                        <p>Software & AI for Robotics</p>
                        <p>Computer Vision & Robot Perception</p>
                        <p>Machine Learning & Autonomous Systems</p>
                    </div>
                    <div className="point">
                        <h3>Goals</h3>
                        <p>Build Intelligent Robotics Software</p>
                        <p>Turn Visual Perception into Robot Action</p>
                        <p>Connect AI Models with Real-World Systems</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About; 