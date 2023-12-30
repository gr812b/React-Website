import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css';

const Homepage = ( { projects } ) => {
    
    const [selectedProject, setSelectedProject] = useState(null);

    const closeModal = () => {
        const dialog = document.querySelector('dialog');
        dialog.close();
        setSelectedProject(null); // Clear the selected project when the modal is closed
    }

    const openModal = (project) => {
        setSelectedProject(project); // Store the selected project in the state
        const dialog = document.querySelector('dialog');
        dialog.showModal();
    }

    return (
        <div className="homepage">

            <dialog className="modal" onClick={() => {closeModal()}}>
                <h1>{selectedProject?.name}</h1>
                <p>{selectedProject?.description}</p>
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