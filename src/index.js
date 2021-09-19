import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StatefullComponent from './containers/StatefullComponent';
import MainHeader from './components/MainHeader/MainHeader';

ReactDOM.render(
  <React.StrictMode>
    {/* <StatefullComponent /> */}
    <MainHeader />
  </React.StrictMode>,
  document.getElementById('header')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
