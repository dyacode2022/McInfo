// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import McData from "./McData";

function App() {

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <McData />

        </header>
      </div>
  );

}

export default App;
