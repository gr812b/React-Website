import "../../styles/projects.css";

const SelfDrivingBall = (props) => {
    return(
        <div className="project-container">
            <div className="project-title">
                <h1>Travelling Globe</h1>
            </div>
            <div className="project-blurb">
                <p>
                This project is the most WIP, and a collaboration between myself and a friend. It is a self-driving globe that can be controlled via an Arduino. 
                It is currently in development, but I am working on it.
                </p>
            </div>
            <div className="project-media">
                Show version 1 here with joshs video 
            </div>
            <div className = "project-links">
                <a href = "https://github.com/gr812b/" target = "_blank" rel = "noopener noreferrer">GitHub</a>
                <a href = "https://ballball.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">Live Site</a>
            </div>

            <div className="project-background">
                I have created a version in the past, and it worked OK but the globe was too heavy and we used a more primitive hamster ball style.
                This one will hopefully be pivot focused and better all round.
            </div>

            <div className="project-technology">
                
            </div>
        </div>
    );
    
}

export default SelfDrivingBall;