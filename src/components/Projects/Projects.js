import React from 'react';
import "./Projects.css";



const Projects = () => {
  

  return (
    <div className="projects-container" id="projects">
      <div className="projects-grid">
        <div className="project-item-1">
          <h2>Legacies Cookbook</h2>
        </div>
        <div className="project-item-2">
        <h2>Water My Plants API</h2>
        </div>
        <div className="project-item-3">
          <h2>Sunny</h2>
        </div>
        <div className="project-item-4">
          <h2>Showzilla</h2>
        </div>
        <div className="project-item-5">
          <h2>African Marketplace</h2>
        </div>
      </div>
      <a className='project-button' href="https://github.com/da-vazquez" target="_blank" rel="noopener noreferrer">see more</a>
    </div>
 
  )
}

export default Projects;