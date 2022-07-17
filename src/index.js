import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/pages/Home.js';

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

