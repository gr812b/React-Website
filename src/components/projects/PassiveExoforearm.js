import "../../styles/projects.css";
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const slideImages = [
    "https://cdn.discordapp.com/attachments/817422927459778582/824736650181214209/unknown.png",
    'https://content.instructables.com/ORIG/F6U/DZDZ/IJUCRMGP/F6UDZDZIJUCRMGP.png?auto=webp&fit=bounds&frame=1&height=1024&auto=webp&frame=1&height=300',
    'https://content.instructables.com/ORIG/FYO/Z7SO/IJUCRMCJ/FYOZ7SOIJUCRMCJ.jpg?auto=webp&frame=1&crop=3:2&width=320&md=fdff5960c0d7fcc64f014c72ef7db312'
  ];

const passiveExoforearm = (props) => {
    return(
        <div className="project-container">
            <div className="project-intro">
                <div className="project-title">
                    <h1>Passive Exoforearm</h1>
                </div>
                <div className="project-toptop">
                    <div className="project-blurb">
                        <p>
                        This will be fully documented when I decide to spend 2 hours alone on this, but its basically a cool arm thing, see the picture! Oh, and the PDF has the documentation!!!
                        </p>
                    </div>
                    <div className="project-links">
                        <div>
                            <FontAwesomeIcon icon="fas fa-file-pdf" />
                            <a href="https://docdro.id/KAdGK7Z" target="_blank" rel="noreferrer"> PDF</a>
                        </div>
                    </div>
                </div>

                <div className="project-slides">
                    <Slide easing="ease">
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            <span>This image was taken in order to stop world death</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            <span>I am writing this random text in hopes it finds you well.</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <span>ATTENTION! Thanks :)</span>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>

            <div className="project-indepth">
                <div className="project-title">
                    <h1>Super In Depth Explanation!!</h1>
                </div>

                <h2>Background</h2>
                <div className="project-background">
                    <p>
                    I have created a version in the past, and it worked OK but the globe was too heavy and we used a more primitive hamster ball style.
                    This one will hopefully be pivot focused and better all round.
                    </p>
                </div>

                <h2>Technology</h2>
                <div className="project-technology">
                    <p>
                        - 3D Modelling
                        - Physics
                        - material selection tool
                    </p>
                </div>
            </div>
        </div>
        
    );
    
}

export default passiveExoforearm;