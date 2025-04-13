import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/profile.png';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={profilePic} alt="Melinda Tran" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MelindaTan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Melinda Tran</h1>
          <p>Computer Engineer & Computer Science</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/MelindaTan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;