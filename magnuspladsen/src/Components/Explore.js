import React from 'react';
import './Explore.css';
import { Link } from "react-router-dom";


class Explore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Explore">
        <div className="Explore-skills">
          <h2>SKILLS</h2>
          <p className="skills-htmlcss">HTML & CSS</p>
          <p className="skills-react">REACT</p>
          <p className="skills-javascript">JAVASCRIPT</p>
          <p className="skills-xd">ADOBE XD</p>
          <p className="skills-python">PYTHON</p>
        </div>
      </div>
      );
    }
}


export default Explore;
