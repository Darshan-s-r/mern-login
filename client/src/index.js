import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
// import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// ReactDOM.render(<Routess />, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
