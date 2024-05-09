import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Brac University"
            date="2019 — 2023"
            description="Bsc in Computer Science and Engineering "
          />
        </ol>
      </div>

      {/* <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
        
          <TimelineItem
            title="Web designer"
            date="2010 — 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
        </ol>
      </div> */}

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Python" value={80} />
          <SkillItem title="PHP" value={60} />
          <SkillItem title="JavaScript" value={80} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
