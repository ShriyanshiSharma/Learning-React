import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Adding JS in JSX by using  -> { }
const a = ["Dark","Friends","1899","The Orignals","4 More Shots"]
const n = "Netflix Series";
const name = "Shriyanshi Sharma";
const date = new Date();
const d = date.toLocaleDateString();
const timee = date.toLocaleTimeString();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* Templates Literals */}
  <h1>{`${n}`} </h1>
  <p>{`List of 5 ${n}:`}</p>
  <ol>
    <li>{a[0]}</li>
    <li>{a[1]}</li>
    <li>{a[2]}</li>
    <li>{a[3]}</li>
    <li>{a[4]}</li>
  </ol>

  <h1>{`My name is ${name}`}</h1>
  <p>{`Today's date is: ${d}`}</p>
  <p>{`Current time is: ${timee}`}</p>
  </>
);