import React from 'react';
import logo from './logo.svg';
import gm from './gm.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={gm} className="App-logo" alt="logo" />


        <p className=""> Gustavo Ama muito a Manoela</p>
        <p>Quer namorar comigo? Beijo para sim!!!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
