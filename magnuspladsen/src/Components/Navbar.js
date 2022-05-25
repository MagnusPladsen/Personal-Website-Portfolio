import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import menuIcon from '../Images/menu-100.png';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isDropDown: false};
        this.toggleDropDown = this.toggleDropDown.bind(this);
    }
    toggleDropDown() {
        if (this.state.isDropDown === false) {
            this.setState({isDropDown: true})
        } if (this.state.isDropDown === true) {
            this.setState({isDropDown: false})
        }
    }
    render() {
        let dropDown = this.state.isDropDown ? "show-dropdown" : "hide-dropdown";
        return (
            <div>
                <nav className="desktop-nav">
                    <header className="desktop-header">
                        <div className="desktop-pb" alt="Profile picture"></div>
                        <h1>Magnus Pladsen</h1>
                        <div className="desktop-icons">
                            <a href="https://www.facebook.com/magnus.pladsen/" target="_blank"><div className="desktop-facebook icon facebook"></div></a>
                            <a href="https://www.linkedin.com/in/magnus-pladsen-1a2738226" target="_blank"><div className="desktop-linkedin icon linkedin"></div></a>
                            <a href="https://github.com/MagnusPladsen" target="_blank"><div className="desktop-github icon github"></div></a>
                        </div>
                        <a href="javascript:void(0);" className="menu-icon" onClick={this.toggleDropDown}><img src={menuIcon} alt="Hamburger menu" className="desktop-menu-icon" /></a>
                        <div className={dropDown} id="drop-down">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/explore"><li>Explore</li></Link>
                            <Link to="/under_development"><li>Portfolio</li></Link>
                            <Link to="/under_development"><li>About</li></Link>
                            <Link to="/under_development"><li>Contact</li></Link>
                            <Link to="/under_development"><li>CV</li></Link>
                        </div>
                    </header>
                </nav>
                <nav className="mobile-nav">
                    <ul>
                        <div className="nav-pb"></div>
                        <li>Magnus Pladsen</li>
                        <a href="javascript:void(0);" className="menu-icon" onClick={this.toggleDropDown}></a>
                        <div className={dropDown} id="drop-down">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/explore"><li>Explore</li></Link>
                            <Link to="/under_development"><li>Portfolio</li></Link>
                            <Link to="/under_development"><li>About</li></Link>
                            <Link to="/under_development"><li>Contact</li></Link>
                            <Link to="/under_development"><li>CV</li></Link>
                        </div>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;