import React from 'react';
import './Interests.css';
import { Link } from "react-router-dom";

function Interests() {
  return (
    <div className="Interests">
        <header className="Interests-header">
            <h1>Interests</h1>
        </header>
      <Link to="/explore"><button className="Interests-back-btn">Back</button></Link>
    </div>
  );
}

export default Interests;

