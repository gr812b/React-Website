import "../../styles/projects.css";
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const slideImages = [
    "https://content.instructables.com/ORIG/FZO/T6IU/IJUCRM9F/FZOT6IUIJUCRM9F.jpg?auto=webp&frame=1&width=320&md=6506c3725b95b9e2bac42afc12ddc907",
    'https://content.instructables.com/ORIG/F6U/DZDZ/IJUCRMGP/F6UDZDZIJUCRMGP.png?auto=webp&fit=bounds&frame=1&height=1024&auto=webp&frame=1&height=300',
    'https://content.instructables.com/ORIG/FYO/Z7SO/IJUCRMCJ/FYOZ7SOIJUCRMCJ.jpg?auto=webp&frame=1&crop=3:2&width=320&md=fdff5960c0d7fcc64f014c72ef7db312'
  ];

const SelfDrivingBall = (props) => {
    return(
        <div className="project-container">
            <div className="project-intro">
                <div className="project-title">
                    <h1>Travelling Globe</h1>
                </div>
                <div className="project-toptop">
                    <div className="project-blurb">
                        <p>
                        This project is the most WIP, and a collaboration between myself and a friend. It is a self-driving globe that can be controlled via an Arduino. 
                        It is currently in development, but I am working on it.
                        </p>
                    </div>
                    <div className="project-links">
                        <div>
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                            <a href="https://github.com/gr812b/" target="_blank" rel="noreferrer"> GitHub</a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="fa-brands fa-youtube" />
                            <a href="https://www.youtube.com/embed/RzzWmTIVv3c?t=2256s" target="_blank" rel="noreferrer"> Youtube</a>
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

                <h2>Some more media :)</h2>
                <div className="project-media">
                    <iframe width="560" height="315" title="red-carpet-bb8" src="https://www.youtube.com/embed/RzzWmTIVv3c?t=2256s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        There is literally nothing......?
                    </p>
                </div>
            </div>
        </div>
    );
    
}

export default SelfDrivingBall;