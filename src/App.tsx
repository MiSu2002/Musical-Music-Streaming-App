import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './styles.css';
import DisplayBoard from './DisplayBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayBoard/>
      </header>
    </div>
  );
}

export default App;
