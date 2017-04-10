import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

let msg = "JS loaded successfully ..";
console.log(msg);

ReactDOM.render(<App />, document.getElementById('react'));