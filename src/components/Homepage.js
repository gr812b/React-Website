import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css';
import Projects from './Projects.json';

const Homepage = ( { projects, setBodyStyle } ) => {
    
    const [selectedProject, setSelectedProject] = useState(null);

    const closeModal = () => {
        // Get the current top position (as a positive number)
        const scrollY = parseInt(getComputedStyle(document.querySelector('.App')).top, 10) * -1;

        setBodyStyle({ position: '', top: '' }); // Allow scrolling when the modal is closed
        
        const dialog = document.querySelector('dialog');
        dialog.close();

        setSelectedProject(null); // Clear the selected project when the modal is closed

        console.log(scrollY)
        // Restore the scroll position
        setTimeout(() => {
            window.scrollTo(0, scrollY);
        }, 0);
    }

    const openModal = (project) => {
        // Store the current scroll position
        const scrollY = window.scrollY;

        setSelectedProject(project); 

        // Prevent scrolling when the modal is open
        setBodyStyle({ position: 'fixed', top: `-${scrollY}px` });

        const dialog = document.querySelector('dialog');
        dialog.showModal();
    }
    

    return (
        <div className="homepage">
            <dialog className="modal"  >
                {Projects.projects.map(project => {
                    if (project.name === selectedProject?.name) {
                        const ProjectElement = require('./projects/' + project.name.replace(/ /g, '')).default;
                        return (
                            <ProjectElement />
                        )
                    }
                })}
                <button className="modal-close" onClick={closeModal}>X</button>
            </dialog>
            

            <div className="homepage__hero">
                <div className="homepage__hero-text">
                    <h1>Welcome to the <span>Kai</span> page</h1>
                    <p>This is a full stack application using the MERN stack. It is built with React, Express, MongoDB, and Node.js. It is deployed on Heroku.</p>
                </div>
            </div>

            <div className="homepage__projects">
                <h1>Projects</h1>
            </div>

            

            <div className="projects">
                
                {projects.map(project => {
                    return (

                        // Its a link object so it looks clickable but it doesn't do anything yet
                        <Link className="project" key={project.id} onClick={() => {openModal(project)}}>
                            <img src={project.image} alt={project.name} />
                            <h3>{project.name}</h3>
                            <p className="project-blurb">This is a totally long description that each project would have and would be centered and look ince but for now it shall simply be default text.</p>
                        </Link>
                    )})}
            </div>

            <div className="homepage-contact">
                <h1>Contact me</h1>
            </div>

        </div>
    );
}

export default Homepage;