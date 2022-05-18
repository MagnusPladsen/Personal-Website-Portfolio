import React from 'react';
import './UnderDevelopment.css';
import { Link } from "react-router-dom";

function UnderDev() {
  return (
    <div className="UnderDev">
      <header className="UnderDev-header">
        <h1>DEVELOPMENT</h1>
        <p className="UnderDev-header-p">This page of the website is currently under development.</p>
        <div className="UnderDev-img"></div>
        <p className="UnderDev-img-p">internet clipart PNG Designed By Twiri from <a href="https://pngtree.com"> Pngtree.com</a></p>
      </header>
      <Link to="/"><button className="UnderDev-btn">Home</button></Link>
    </div>
  );
}

export default UnderDev;

