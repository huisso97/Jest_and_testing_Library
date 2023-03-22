import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [style, setStyle] = useState('red');
  const newStyle = style === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        onClick={() => {
          setStyle(newStyle);
        }}
        style={{ backgroundColor: style }}
      >
        Change to {newStyle}
      </button>
    </div>
  );
}

export default App;
