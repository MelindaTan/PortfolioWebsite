import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2025 - Present"
            iconStyle={{ background: '#3a393b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">LLM Undergraduate Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">Boston, Massachusetts</h4>
            <p>
              Conducted research on large language models, fine-tuning techniques, and prompt engineering methodologies
            </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - Aug 2025"
            iconStyle={{ background: '#3a393b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Vision Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Ithica, NewYork</h4>
            <p>
            Annotated data and trained AI models to detect obstacles and develop navigation trajectories for  robots
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2025 - May 2025"
            iconStyle={{ background: '#3a393b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Sydney, Australia</h4>
            <p>
              Created data to train PyTorch models
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024 - Aug 2024"
            iconStyle={{ background: '#3a393b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Marketing Operations Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Beaverton, Oregon</h4>
            <p>
            Executed event marketing campaigns, managed outreach, and drove engagement through strategic coordination
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2022 - Aug 2022"
            iconStyle={{ background: '#3a393b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Photogrammetry Design Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Portland, Oregon</h4>
            <p>
              Learned NX to rework designs
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2021 - Jan 2022"
            iconStyle={{ background: '#3a393b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer @ FIRST Robotics</h3>
            <h4 className="vertical-timeline-element-subtitle">Beaverton, Oregon</h4>
            <p>
              Implemented Automation with TensorFlow, OpenCV, and Vuforia
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2018 - Jan 2021"
            iconStyle={{ background: '#3a393b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mechanical Engineer @ FIRST Robotics</h3>
            <h4 className="vertical-timeline-element-subtitle">Beaverton, Oregon</h4>
            <p>
              Worked hands-on and 3D printed with PTC creo
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;