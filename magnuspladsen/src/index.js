import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Explore from './Components/Explore';
import App from './App';
import Navbar from './Components/Navbar';
import './index.css';
import UnderDev from './Components/UnderDevelopment';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="explore" element={<Explore />} />
      <Route path="under_development" element={<UnderDev />} />
    </Routes>
  </BrowserRouter>
);