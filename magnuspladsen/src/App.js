import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Explore from './Components/Explore';





class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div className="pb" alt="Profile picture"></div>
          <h1>Magnus Pladsen</h1>
          <h2>Junior Developer</h2>
          <div className="icons">
            <a href="https://www.facebook.com/magnus.pladsen/" target="_blank"><div className="icon facebook"></div></a>
            <a href="https://www.linkedin.com/in/magnus-pladsen-1a2738226" target="_blank"><div className="icon linkedin"></div></a>
            <a href="https://github.com/MagnusPladsen" target="_blank"><div className="icon github"></div></a>
          </div>
            <button>Explore</button>
        </header>
      </div>
    );
  }
}


export default App;
