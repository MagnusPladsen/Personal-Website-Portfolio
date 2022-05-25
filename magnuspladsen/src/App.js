import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Junior Developer</h2>
        <div className="mobile-icons">
          <a href="https://www.facebook.com/magnus.pladsen/" target="_blank"><div className="mobile-facebook icon facebook"></div></a>
          <a href="https://www.linkedin.com/in/magnus-pladsen-1a2738226" target="_blank"><div className="mobile-linkedin icon linkedin"></div></a>
          <a href="https://github.com/MagnusPladsen" target="_blank"><div className="mobile-github icon github"></div></a>
        </div>
        <Link to="/explore"><button className="btn-explore">Explore</button></Link>
      </header>
    </div>
  );
}

export default App;

