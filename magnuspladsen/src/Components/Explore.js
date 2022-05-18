import React from 'react';
import './Explore.css';
import { Link } from "react-router-dom";
import Skills from './Skills';
import Interests from './Interests';


class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSkills: false,
      showInterests: false
    }
    this.toggleSkills = this.toggleSkills.bind(this);
    this.toggleInterests = this.toggleInterests.bind(this);
  }
  toggleSkills() {
    if (this.state.showSkills === false) {
      this.setState({showSkills: true})
    } if (this.state.showSkills === true) {
      this.setState({showSkills: false})
    } 
  }
  toggleInterests() {
    if (this.state.showInterests === false) {
      this.setState({showInterests: true})
    } if (this.state.showInterests === true) {
      this.setState({showInterests: false})
    }
  }
  render() {
    let showSkills = this.state.showSkills ? "show-skills" : "hide-skills";
    let showInterests = this.state.showInterests ? "show-interests" : "hide-interests";
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
        <div className="Explore-btns">
          <button className="Explore-btn btn-skills" onClick={this.toggleSkills}>Skills</button>
          <button className="Explore-btn btn-interests" onClick={this.toggleInterests}>Interests</button>
        </div>
        <div className={showSkills}><Skills /></div>
        <div className={showInterests}><Interests /></div>
      </div>
      );
    }
}


export default Explore;
