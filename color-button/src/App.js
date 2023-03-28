import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [style, setStyle] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newStyle = style === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => {
          setStyle(newStyle);
        }}
        style={{ backgroundColor: style }}
      >
        Change to {newStyle}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => {
          setDisabled(e.target.checked);
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
