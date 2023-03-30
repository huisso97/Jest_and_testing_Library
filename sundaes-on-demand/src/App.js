import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SummaryForm from './pages/summary/SummaryForm';
import OrderEntry from './pages/entry/OrderEntry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SummaryForm />
        <OrderEntry />
      </header>
    </div>
  );
}

export default App;
