import React from 'react';
import './Explore.css';



class Explore extends React.Component {
    render() {
        return (
            <div className="Explore">
              <header className="Explore-header">
                <div className="pb" alt="Profile picture"></div>
                <h1>TEST</h1>
                <h2>THIS CODE WILL CHANGE WHEN I GET IT TO RENDER</h2>
                <div className="icons">
                  <a href="https://www.facebook.com/magnus.pladsen/" target="_blank"><div className="icon facebook"></div></a>
                  <a href="https://www.linkedin.com/in/magnus-pladsen-1a2738226" target="_blank"><div className="icon linkedin"></div></a>
                  <a href="https://github.com/MagnusPladsen" target="_blank"><div className="icon github"></div></a>
                </div>
              </header>
            </div>
        );
    }
}

export default Explore;
