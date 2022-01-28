import "../../styles/projects.css";

const SelfDrivingBall = (props) => {
    return(
        <div className="project-container">
            <div className="project-title">
                <h1>Self-Driving Ball</h1>
            </div>
            <div className="project-description">
                A self-driving ball that can be controlled by a computer.
            </div>
            <div className="project-links">
                <a href="youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Video</a>
                <a href="not-yet-available" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="not-yet-available" target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
        </div>
    );
    
}

export default SelfDrivingBall;