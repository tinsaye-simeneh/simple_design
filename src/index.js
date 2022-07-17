import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/pages/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Simple(){
  return(
    <>
    <Home/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Simple/>
);

