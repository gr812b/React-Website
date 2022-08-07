import "../../styles/projects.css";
import "../../styles/project6.css"

const project6 = (props) => {

    const handleChange = e => {
        console.log("hit");
    };

    return (
        <div className="project-intro">
            <h2>nothing to see here...</h2>
            <div className="shop-center">
                <div className="shop-center-top">
                    <img src="https://via.placeholder.com/200x200" alt="item" />
                    <div className="shop-item-info">
                        brands
                        exciting
                        etccc
                        ettt
                    </div>
                </div>

                <div className="shop-center-bottom">
                    <div className="shop-temp">
                        <div className="container">
                            <img src="https://via.placeholder.com/100x100" alt="item" />
                            <button>Add to cart</button>
                        </div>
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                        <div className="music-sample">
                            Stuff Here
                        </div>
                    </div>
                    <div className="description">
                        This frigen suck
                    </div>

                </div>
            </div>
        </div>
    );

}

export default project6;