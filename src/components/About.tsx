import React from "react";
import '../assets/styles/About.scss';

function About() {
    return (
        <div className="about-container" id="about">
            <div className="about-content">
                <h1>About Me</h1>
                <div className="about-text">
                    <p>
                    Hello! I'm Melinda, a Computer Engineering and Computer Science student with a concentration in ML. I'm passionate about leveraging AI and software to build intelligent, impactful solutions. With a strong foundation in algorithms, data structures, and machine learning, I enjoy creating systems that learn, adapt, and solve real-world problems.
                    </p>
                    <p>
                    My journey in technology has been fueled by a fascination with artificial intelligence and its potential to transform industries. From training neural networks to building intuitive software applications, I thrive on turning complex ideas into functional, user-focused tools.
                    </p>
                    <p>
                    I enjoy exploring new developments in AI, diving into open-source communities, and collaborating with others to turn ideas into meaningful software. I'm always looking for opportunities to learn, build, and grow through hands-on experience.
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
                        <p>Machine Learning</p>
                        <p>Robotics & Automation</p>
                        <p>Full Stack Development</p>
                    </div>
                    <div className="point">
                        <h3>Goals</h3>
                        <p>Creating Innovative Solutions</p>
                        <p>Continuous Learning</p>
                        <p>Technology for Impact</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About; 