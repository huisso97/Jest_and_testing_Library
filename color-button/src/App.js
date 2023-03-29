import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  // 정규식 설명 : 대문자가 문자열의 첫, 끝이 아닌한, 모든 대문자 앞에 공백을 넣는 식
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [style, setStyle] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newStyle =
    style === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => {
          setStyle(newStyle);
        }}
        style={{ backgroundColor: disabled ? 'gray' : style }}
      >
        Change to {replaceCamelWithSpaces(newStyle)}
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
