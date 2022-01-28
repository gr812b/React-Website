import "../../styles/projects.css";

const StockMarketPrediction = (props) => {
    return(
        <div className = "project-container">
            <div className = "project-title">
                <h1>Stock Market Prediction</h1>
            </div>
            <div className = "project-description">
                A stock market prediction app that uses machine learning to predict stock prices.
            </div>
            <div className = "project-links">
                <a href = "https://github.com/gr812b/tohacks-2021" target = "_blank" rel = "noopener noreferrer">GitHub</a>
                <a href = "https://tohacks-2021.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">Live Site</a>
            </div>
        </div>
    );
    
}

export default StockMarketPrediction;