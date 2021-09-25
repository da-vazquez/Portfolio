import React from 'react';
import "./Projects.css";



const Projects = () => {
  

  return (
    <div className="projects-container" id="projects">
      <div className="projects-grid">
        <div className="project-item-1">
          <a href="https://github.com/da-vazquez/scribble-stadium-fe" target="_blank" rel="noopener noreferrer">Scribble Stadium</a>
        </div>
        <div className="project-item-2">
          <a href="https://github.com/Water-My-Plants-PTCT/plants-backend" target="_blank" rel="noopener noreferrer">Water My Plants</a>
        </div>
        <div className="project-item-3">
          <a href="https://github.com/da-vazquez/sunny" target="_blank" rel="noopener noreferrer">Sunny</a>
        </div>
        <div className="project-item-4">
          <a href="https://github.com/da-vazquez/CSS-Grid-Calculator" target="_blank" rel="noopener noreferrer">Super Calculator</a>
        </div>
        <div className="project-item-5">
          <a href="https://github.com/da-vazquez/African_Marketplace" target="_blank" rel="noopener noreferrer">African Marketplace</a>
        </div>
      </div>
      <a className='project-button' href="https://github.com/da-vazquez" target="_blank" rel="noopener noreferrer">see more</a>
    </div>
  )
}

export default Projects;