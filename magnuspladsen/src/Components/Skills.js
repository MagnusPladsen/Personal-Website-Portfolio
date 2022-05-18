import React from 'react';
import './Skills.css';
import { Link } from "react-router-dom";

function Skills() {
  return (
    <div className="Skills">
        <header className="Skills-header">
            <h1>Skills</h1>
        </header>
      <Link to="/explore"><button className="Skills-back-btn">Back</button></Link>
    </div>
  );
}

export default Skills;

