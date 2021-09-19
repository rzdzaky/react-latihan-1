import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StatefullComponent from './containers/StatefullComponent';
import MainHeader from './components/MainHeader/MainHeader';
import TopWrapper from './components/TopWrapper/TopWrapper';

ReactDOM.render(
  <React.StrictMode>
    {/* <StatefullComponent /> */}
    <MainHeader />
    <TopWrapper />
  </React.StrictMode>,
  document.getElementById('MainHeader')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
