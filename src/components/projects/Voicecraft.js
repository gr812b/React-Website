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
                    It is built with PySimpleGui and Python.

                    Built for MacHacks 2022, this application allows you to interface with your computer via audio input only. Using an easy-to-use configuration gui, and state of the art voice recognition technology, playing games such as minecraft is easier than ever before.
                </p>
            </div>
            <div className="project-images">
                <img src="https://i.imgur.com/Em5IaYu.png" alt="Voicecraft" />
            </div>
            <div className="project-links">
                <a href="https://github.com/gr812b/Voicecraft" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://voicecraft-gr812b.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
        </div>
    );
    
}

export default Voicecraft;