import "../../styles/projects.css";
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const slideImages = [
    "https://i.imgur.com/Em5IaYu.png",
    'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_39fb032191ae1030f4f9b2d0b1c990ce/assemblyai-speech-to-text-api.png',
    'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg'
  ];

const Voicecraft = (props) => {
    return(
        <div className="project-container">
            <div className="project-intro">
                <div className="project-title">
                    <h1>Voicecraft</h1>
                </div>
                <div className="project-toptop">
                    <div className="project-blurb">
                        <p>
                        Built for MacccHacks 2022, this application allows you to interface with your computer via audio input only. Using an easy-to-use configuration GUI, 
                        and state of the art voice recognition technology, playing games such as minecraft is easier than ever before. It comes with many built in commands, 
                        such as <em>turn x degrees</em> and <em>space</em>, but allows for a variety of custom key strokes and mouse movements as well.
                        
                        </p>
                    </div>
                    <div className="project-links">
                        <div>
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                            <a href="https://github.com/gr812b/Voicecraft" target="_blank" rel="noreferrer"> GitHub</a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="fa-brands fa-youtube" />
                            <a href="https://www.youtube.com/embed/alZYxxvEAFg" target="_blank" rel="noreferrer"> Youtube</a>
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
                    <img src="https://i.imgur.com/Em5IaYu.png" alt="Voicecraft" />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/alZYxxvEAFg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {/*PUT THE PROPER VIDEO */}https://www.youtube.com/embed/alZYxxvEAFg
                </div>

                <h2>Background</h2>
                <div className="project-background">
                    <p>
                        MacHacks 2022 is a hackathon hosted by the University of McMaster, of which I and my roommates are apart of. We were given the opportunity to build innovative
                        applications, while having access to unique technologies we normally would not have had otherwise. While the main goal was to create impactful technology, my group
                        of friends wanted to have a strong relation to this project. We were able to create a project that was both fun and exciting by combining the popular game Minecraft 
                        (and others) with AssemblyAI, a voice recognition software.
                    </p>
                </div>

                <h2>Technology</h2>
                <div className="project-technology">
                    <p>
                    Voicecraft is comprised of two main components, the GUI and the voice recognition backend. 

                    Due to a time limit, we made a rash decision of using 
                    <a href="https://pysimplegui.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">PySimpleGui</a>. It is a simple GUI library that wraps
                    other Python GUI toolkits (Tkinter, PySide, wxPython) in order to have compact code. This however heavily limits customization and control. It was an excellent
                    tool for shortterm work, but limited our creativity near the end of the project.

                    With the hackathon came access to many unique tools at our disposal, 
                    one of which being <a href="https://www.assemblyai.com/" target="_blank" rel="noopener noreferrer">AssemblyAI's</a> voice recognition technology. Simply put,
                    it is a state of the art voice recognition technology that can be used to create a voice-interactable application. We made use of their API in order to recieve
                    text output based on voice input, which was then used to interact with our list of commands to simulate key presses.

                    Combining these two allow for a very simple and intuitive interface, and a very powerful voice recognition technology.
                    </p>
                </div>
            </div>
        </div>

        
    );
    
}

export default Voicecraft;