import React from 'react';
import Project from './project-card.jsx';
import './projects.css';
import PB from '../assets/hashtag.png';

function Projects() {
  return (
    <div className="project-section">
      <Project
        image={PB}
        link="/personal-board"
        title="Personal Board"
        description="A self-made Python project inspired by imageboards like Pixiv and ZeroChan, where the user can 'tag' pictures from their computer with keywords, and later use those keywords to pull up those exact photos."
      />
    </div>
  );
}

export default Projects;