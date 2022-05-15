import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Explore from './Components/Explore';
import './index.css';
import reportWebVitals from './reportWebVitals';


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleCick = this.handleCick.bind(this);
    this.state = { page: <App onClick={this.handleClick}/> }
  }
  handleCick() {
    this.setState({ page: <Explore /> })
  }
  render () {
    return this.state.page
  }
}




 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
