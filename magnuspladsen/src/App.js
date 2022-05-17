import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-pb" alt="Profile picture"></div>
        <h1>Magnus Pladsen</h1>
        <h2>Junior Developer</h2>
      </header>
      <div className="App-icons">
        <a href="https://www.facebook.com/magnus.pladsen/" target="_blank"><div className="icon App-facebook facebook"></div></a>
        <a href="https://www.linkedin.com/in/magnus-pladsen-1a2738226" target="_blank"><div className="icon App-linkedin linkedin"></div></a>
        <a href="https://github.com/MagnusPladsen" target="_blank"><div className="App-github icon github"></div></a>
      </div>
      <Link to="/explore"><button class="btn-explore">Explore</button></Link>
    </div>
  );
}

export default App;

