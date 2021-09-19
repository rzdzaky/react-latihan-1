import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const HelloComponent = () => {
  return <p>Hello Component</p>
}

class StatefullComponent extends React.Component {
  render(){
    return <p>Statefull Component</p>
  }
}

ReactDOM.render(
  
  <React.StrictMode>
    <StatefullComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
