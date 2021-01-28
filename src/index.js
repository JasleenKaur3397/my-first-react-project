import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
ReactDOM.render(

  React.createElement(
    "h1",
    { style: {color: "blue"}},
    "Hello World!!"
    ), // what we want to create
  document.getElementById("root")  //where we want to put it
)
*/


ReactDOM.render(
  React.createElement(
  "ul",
  "null",
  React.createElement("li",null,"Monday"),
  React.createElement("li",null,"tues"),
  React.createElement("li",null,"WEd")
  
  ),
  document.getElementById("root")
)

