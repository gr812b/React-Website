import { Link } from 'react-router-dom';
import '../css/homepage.css';

const Homepage = (props) => {

    const projects = props.projects;

    return (
        <div className="homepage">
            

            <div className="homepage__hero">
                <div className="homepage__hero-text">
                    <h1>Welcome to the <span>MERN</span> Stack</h1>
                    <p>This is a full stack application using the MERN stack. It is built with React, Express, MongoDB, and Node.js. It is deployed on Heroku.</p>
                </div>
            </div>

            <div className="homepage__projects">
                <h1>Projects</h1>
            </div>

            <div className="projects">
                
                {projects.map(project => {
                    return (
                        <Link to={"/" + project.name} className="project" key={project.id}>
                            <img src={project.image} alt={project.name} />
                            <h3>{project.name}</h3>
                        </Link>
                    )})}
            </div>
        </div>
    );
}

export default Homepage;