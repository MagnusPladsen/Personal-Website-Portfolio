import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


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
        let dropDown = this.state.isDropDown ? "show-dropdown" : "hide-dropdown"
        return (
            <div>
                <nav className="desktop-nav">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/explore"><li>Explore</li></Link>
                        <Link to="/under_development"><li>Portfolio</li></Link>
                        <Link to="/under_development"><li>About</li></Link>
                        <Link to="/under_development"><li>Contact</li></Link>
                        <a href="https://docs.google.com/document/d/e/2PACX-1vQQvFgKzQMedDSDs-wHq5pjqllThx08F00eMbHKJg41W-LCpIo6Fo3pq1LO753bn-2cK-neHgBDevAp/pub"><li>CV</li></a>
                    </ul>
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