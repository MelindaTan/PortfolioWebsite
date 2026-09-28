import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { useNavigate } from "react-router-dom";
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

import { experiences } from "../data/experiences";

function Timeline() {
  const navigate = useNavigate();

  return (
    <div id="work">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={experience.date}
              iconStyle={{ background: '#ffb6c1', color: 'white' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              onTimelineElementClick={() => navigate(`/experience/${experience.id}`)}
            >
              <h3 className="vertical-timeline-element-title">{experience.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
              <p>
                {experience.shortDescription}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
