import React, { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/MelindaTranHeadshot.jpeg';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const TITLES = [
  "a computer engineer",
  "a robotics engineer",
  "a computer scientist",
  "an innovator",
];

const TYPE_SPEED = 60;
const DELETE_SPEED = 35;
const PAUSE_AFTER_TYPE = 1400;
const PAUSE_AFTER_DELETE = 300;

function useTypewriter() {
  const [displayed, setDisplayed] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && displayed === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % TITLES.length);
      }, PAUSE_AFTER_DELETE);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayed((d) => d.slice(0, -1));
      }, DELETE_SPEED);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, TYPE_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return displayed;
}

function Main() {
  const typedText = useTypewriter();

  return (
    <div className="container">
      <div className="about-section">
        {/* Ambient floating orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <motion.div
          className="image-wrapper"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img src={profilePic} alt="Melinda Tran" />
        </motion.div>
        <motion.div
          className="content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="social_icons" variants={fadeIn}>
            <a href="https://github.com/MelindaTan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </motion.div>
          <motion.h1
            className="name-flow"
            variants={slideUp}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            Melinda Tran
          </motion.h1>
          <motion.span className="name-accent" variants={fadeIn} />
          <motion.p className="typewriter-line" variants={slideUp}>
            Hi, I'm{" "}
            <span className="typed-text">{typedText}</span>
            <span className="cursor-blink">|</span>
          </motion.p>

          <motion.div className="mobile_social_icons" variants={fadeIn}>
            <a href="https://github.com/MelindaTan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Main;