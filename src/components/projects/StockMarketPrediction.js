import "../../styles/projects.css";

const StockMarketPrediction = (props) => {
    return(
        <div className = "project-container">
            <div className="project-title">
                <h1>Stock market prediction tool</h1>
            </div>
            <div className="project-blurb">
                <p>
                One of the first coding projects I worked on, an attempt at making use of google's 
                <a href="https://pysimplegui.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">TensorFlow</a> to predict certain stocks was made. Myself, along
                with three other McMaster University students worked for a weekend to create a tool that would, using a simple webpage, allow the user to input a stock ticker,
                 and then the program would predict whether the stock should be bought or not. At least, that was the idea.
                </p>
            </div>
            <div className="project-media">
                
            </div>
            <div className = "project-links">
                <a href = "https://github.com/gr812b/tohacks-2021" target = "_blank" rel = "noopener noreferrer">GitHub</a>
                <a href = "https://tohacks-2021.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">Live Site</a>
            </div>

            <div className="project-background">
                ToHacks was a hackathon that myself and three other McNaster students worked on. At the start of this project, I had little to no coding or github experience,
                and therefore was an excellent challenge. Our group decided to try to make use of machine learning, and create the classic stock market algorithm, buy or sell.

            </div>

            <div className="project-technology">
                This project made use of one main advanced technology, being TensorFlow. Google's TensorFlow is a powerful environment for training an AI model.
                It can take inputs from APIs, images, and other data sources, and then train a model to predict the outcome of a given input. Using this technology proved
                to be tricky, as our group had trouble deciphering what problems were occuring. 

                Also used HTML for the first time, which was incredibly interesting as we had no experience with this. Myself and Ariel Wolle(LINK) worked together to create
                an interactive page, and a results page dictating what to do.
            </div>
            
        </div>
    );
    
}

export default StockMarketPrediction;