import React from 'react';
import './resume.css';
import Skill from './skillBar';

function Resume() {
  return (
    <div className="resume_section" id='resume'>
        <div className="container">
            <div className="heading">
              <h1>My Skills</h1>
              <h4>3+ Years of Experience</h4>
            </div>
            <div className="content">
              <Skill value="95" name="html" />
              <Skill value="90" name="css" />
              <Skill value="70" name="javascript" />
              <Skill value="95" name="bootstrap" />
              <Skill value="90" name="jquery" />
              <Skill value="95" name="html" />
              <Skill value="90" name="css" />
              <Skill value="70" name="javascript" />

            </div>
        </div>
    </div>
  )
}

export default Resume;