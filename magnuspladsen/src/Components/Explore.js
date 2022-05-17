import React from 'react';
import './Explore.css';
import { Link } from "react-router-dom";



function Explore() {
  return (
    <div className="Explore">
      <header className="Explore-header">
        <div className="Explore-pb" alt="Profile picture"></div>
          <h1>Magnus Pladsen</h1>
          <div className="Explore-icons">
          <a href="https://www.facebook.com/magnus.pladsen/" target="_blank"><div className="Explore-facebook icon facebook"><p>Facebook</p></div></a>
          <a href="https://www.linkedin.com/in/magnus-pladsen-1a2738226" target="_blank"><div className="Explore-linkedin icon linkedin"><p>LinkedIn</p></div></a>
          <a href="https://github.com/MagnusPladsen" target="_blank"><div className="Explore-github icon github"><p>GitHub</p></div></a>
          </div>
      </header>
      <div class="Explore-btns">
        <button class="Explore-btn btn-skills">SKILLS</button>
        <button class="Explore-btn btn-interests">INTERESTS</button>
      </div>
    </div>
  );
}

export default Explore;
