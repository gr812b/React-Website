import "../../styles/projects.css";

const Voicecraft = (props) => {
    return(
        <div className="project-container">
            <div className="project-title">
                <h1>Voicecraft</h1>
            </div>
            <div className="project-description">
                <p>
                    Voicecraft is a voice recognition application that allows users to record and save their voice.
                    It is built with React, Express, MongoDB, and Node.js. It is deployed on Heroku.
                </p>
            </div>
            <div className="project-links">
                <a href="https://github.com/gr812b/Voicecraft" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://voicecraft-gr812b.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
        </div>
    );
    
}

export default Voicecraft;