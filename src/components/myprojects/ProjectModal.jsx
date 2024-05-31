import React from 'react';
import './projectModal.css';

const ProjectModal = ({ show, onClose, project }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          <h2>{project.title}</h2>
          <p className="modal-description">{project.description}</p>
          <div className="modal-buttons">
            <a href={project.github} className='btn btn-color-2' target="_blank" rel='noreferrer'>GitHub</a>
            {project.demo && <a href={project.demo} className='btn btn-color-1' target="_blank" rel='noreferrer'>Live Demo</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;