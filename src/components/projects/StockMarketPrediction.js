import "../../styles/projects.css";
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const slideImages = [
    "https://miro.medium.com/max/626/0*SaNg8uUaKCMQSS5g.jpg",
    'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_39fb032191ae1030f4f9b2d0b1c990ce/assemblyai-speech-to-text-api.png',
    'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg'
  ];

const StockMarketPrediction = (props) => {
    return(
        <div className="project-container">
            <div className="project-intro">
                <div className="project-title">
                    <h1>Stock market prediction tool</h1>
                </div>
                <div className="project-toptop">
                    <div className="project-blurb">
                        <p>
                        One of the first coding projects I worked on, an attempt at making use of google's 
                        <a href="https://pysimplegui.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">TensorFlow</a> to predict certain stocks was made. Myself, along
                        with three other McMaster University students worked for a weekend to create a tool that would, using a simple webpage, allow the user to input a stock ticker,
                        and then the program would predict whether the stock should be bought or not. At least, that was the idea.
                        </p>
                    </div>
                    <div className="project-links">
                        <div>
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                            <a href="https://github.com/gr812b/tohacks-2021" target="_blank" rel="noreferrer"> GitHub</a>
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
                    <iframe width="560" height="315" title="red-carpet-bb8" src="https://www.youtube.com/embed/RzzWmTIVv3c?t=2256s" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <h2>Background</h2>
                <div className="project-background">
                    <p>
                    ToHacks was a hackathon that myself and three other McNaster students worked on. At the start of this project, I had little to no coding or github experience,
                and therefore was an excellent challenge. Our group decided to try to make use of machine learning, and create the classic stock market algorithm, buy or sell.
                    </p>
                </div>

                <h2>Technology</h2>
                <div className="project-technology">
                    <p>
                    This project made use of one main advanced technology, being TensorFlow. Google's TensorFlow is a powerful environment for training an AI model.
                It can take inputs from APIs, images, and other data sources, and then train a model to predict the outcome of a given input. Using this technology proved
                to be tricky, as our group had trouble deciphering what problems were occuring. 

                Also used HTML for the first time, which was incredibly interesting as we had no experience with this. Myself and Ariel Wolle(LINK) worked together to create
                an interactive page, and a results page dictating what to do.
                    </p>
                </div>
            </div>
        </div>
    );
    
}

export default StockMarketPrediction;