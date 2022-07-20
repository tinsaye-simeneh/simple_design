import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Navbar';
import Home from './Components/pages/Home.js';
import Login from './Components/pages/Login.js';
import Signup from './Components/pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

export default function Simple(){
  return(
    <>
    <Header />
    <Signup/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Simple/>
);

