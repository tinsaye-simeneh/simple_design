import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/pages/Home.js';
import Login from './Components/pages/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

export default function Simple(){
  return(
    <>
    <Login/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Simple/>
);

