import React, { useState } from 'react';
import './myprojects.css';
import IMG1 from '../../assets/portfolio.png';
import IMG2 from '../../assets/alphard_survey.png';
import IMG3 from '../../assets/shift_logo.png';
import IMG4 from '../../assets/breedfinder.png';
import ProjectModal from './ProjectModal';

const Myprojects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Shift Happens',
      img: IMG3,
      description: 'A full-stack scheduling app automating availability inputs to enhance scheduling efficiency. Designed and implemented advanced scheduling features, including an algorithm for automatic schedule generation based on employee availability and automated conflict resolution, improving efficiency by 30% and reducing manual intervention by 40%. Engineered a custom REST API using Node.js to improve real-time data synchronization between server and React frontend.',
      github: 'https://github.com/issryan/ShiftHappens',
      demo: ''
    },
    {
      id: 2,
      title: 'Breed Finder',
      img: IMG4,
      description: 'An AI-driven web app for dog breed identification, achieving 95% accuracy with TensorFlow and Flask. Leveraged the Stanford Dog Breed dataset to train the LLM model, achieving high accuracy through iterative training and optimization. Integrated Flask and React to develop a responsive web interface, enhancing user interaction and functionality. Employed MongoDB to track the history of user submissions, enhancing user engagement by enabling review of past inquiries.',
      github: 'https://github.com/issryan/BreedFinder',
      demo: ''
    },
    {
      id: 3,
      title: 'Portfolio',
      img: IMG1,
      description: 'This portfolio showcases my skills and projects. Built using React, with a focus on clean design and smooth navigation. The portfolio highlights my expertise in web development, including interactive elements and responsive design, ensuring a seamless user experience across various devices. I continuously update this portfolio to reflect my latest projects and achievements.',
      github: 'https://github.com/issryan/Portfolio',
      demo: ''
    },
    {
      id: 4,
      title: 'Alphard Survey',
      img: IMG2,
      description: 'Played a key role in the Alphard Survey project at Centennial College, leading UI/UX design and front-end implementation. Proficient in Figma, HTML, CSS, JavaScript, and well-versed in user-centered design and accessibility standards. Conducted user testing, gathering valuable feedback to optimize the website and enhance user experience. Successfully contributed to the project\'s success by ensuring a visually appealing and user-friendly website.',
      github: 'https://github.com/Alphard-Survey/Alphard-Survey-Base-Model',
      demo: ''
    }
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="my-projects-section">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project) => (
            <div key={project.id} className="details-container color-container" onClick={() => handleOpenModal(project)}>
              <div className="article-container">
                <img src={project.img} alt={project.title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal show={showModal} onClose={handleCloseModal} project={selectedProject} />
    </section>
  );
};

export default Myprojects;