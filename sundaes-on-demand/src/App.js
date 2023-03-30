import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SummaryForm from './pages/summary/SummaryForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SummaryForm />
      </header>
    </div>
  );
}

export default App;
