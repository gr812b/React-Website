import "../../styles/projects.css";

const passiveExoforearm = (props) => {
    return(
        <div className = "project-container">
            <div className = "project-title">
                <h1>Passive Exoforearm</h1>
            </div>
            <div className="project-blurb">
                <p>
                This will be fully documented when I decide to spend 2 hours alone on this, but its basically a cool arm thing, see the picture! Oh, and the PDF has the documentation!!!
                </p>
            </div>
            <div className="project-media">
                <img src="https://cdn.discordapp.com/attachments/817422927459778582/824736650181214209/unknown.png" alt="Passive Exoforearm" />
            </div>
            <div className = "project-links">
                <a href="https://docdro.id/KAdGK7Z" target="_blank" rel="noopener noreferrer">PDF</a>
                <a href = "attachment/PassiveExoforearm.zip" target = "_blank" rel = "noopener noreferrer">Download</a>
            </div>
            

            <div className="project-background">

            </div>

            <div className="project-technology">
                - 3D Modelling
                - Physics
                - material selection tool
            </div>
        </div>
    );
    
}

export default passiveExoforearm;