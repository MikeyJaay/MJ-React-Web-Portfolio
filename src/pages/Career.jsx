import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { careerHistory } from "../data/careerData";
import "../styles/Career.css";

function Career() {
  return (
     <main>
      <section>
        <h1>Story of My Career</h1>
      </section>
      <section className="time-line">
        
        <VerticalTimeline>
          {careerHistory.map((job) => (
           <VerticalTimelineElement
           key={job.id}
           className={`vertical-timeline-element--${job.type.toLowerCase()}`}
           date={`${job.dates.start.toLocaleDateString()} - ${job.dates.end.toLocaleDateString()}`}
           icon={<img src={job.imgUrl} alt={job.name} className={`timeline-icon ${job.type === "Work" ? 'timeline-icon-bg-blue' : 'timeline-icon-bg-pink'}`} />}
         >
              <h3 className="vertical-timeline-element-title">{job.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{job.name}</h4>
              <p>{job.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
    </main>
  );
}

export default Career;
