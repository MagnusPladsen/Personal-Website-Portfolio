import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Junior Developer</h2>
        <Link to="/explore"><button className="btn-explore">Explore</button></Link>
      </header>
    </div>
  );
}

export default App;

