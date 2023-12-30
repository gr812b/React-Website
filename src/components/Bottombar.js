import '../styles/bottombar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bottombar = () => {
    return (
        <div className="bottombar">
            <div className="bottombar-main">
                <div className="bottom-title">Kai Arseneau</div>
                <div className="socials">
                    <a href="https://github.com/gr812b" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                    <a href="https://www.twitch.tv/gr812b" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>
                    <a href="https://www.linkedin.com/in/kai-arseneau-1520691ba/?originalSubdomain=ca" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                    <a href="https://www.youtube.com/channel/UC8_r4peef-HKDMtSIYgSwkA" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                </div>
            </div>
            
            <div className="bottombar-fineprint">
                <div>All rights reserved Kai Arseneau 2022</div>
                <div className="bottombar-links">
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    {' \u2022 '}
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    {' \u2022 '}
                    <Link to="/cookies-policy">Cookies Policy</Link>
                </div>
                <div>Designed by ME!</div>
            </div>
        </div>
    );
}
 
export default Bottombar;