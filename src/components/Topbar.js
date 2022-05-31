import '../styles/topbar.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className="topbar">
            <Link to="/" className="topbar__logo">
                <div className="title">Applesauce!</div>
            </Link>
        </div>
    );
}
 
export default Topbar;