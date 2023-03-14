import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  function handleClick(value) {
    setInput(input + value);
  }

  function handleClear() {
    setInput('');
  }

  function handleCalculate() {
    const result = eval(input);
    setInput(result.toString());
  }

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <br />
      <button className="number" onClick={() => handleClick('7')}>7</button>
      <button className="number" onClick={() => handleClick('8')}>8</button>
      <button className="number" onClick={() => handleClick('9')}>9</button>
      <button className="operator" onClick={() => handleClick('/')}>/</button>
      <br />
      <button className="number" onClick={() => handleClick('4')}>4</button>
      <button className="number" onClick={() => handleClick('5')}>5</button>
      <button className="number" onClick={() => handleClick('6')}>6</button>
      <button className="operator" onClick={() => handleClick('*')}>*</button>
      <br />
      <button className="number" onClick={() => handleClick('1')}>1</button>
      <button className="number" onClick={() => handleClick('2')}>2</button>
      <button className="number" onClick={() => handleClick('3')}>3</button>
      <button className="operator" onClick={() => handleClick('-')}>-</button>
      <br />
      <button className="number" onClick={() => handleClick('0')}>0</button>
      <button className="number" onClick={() => handleClick('.')}>.</button>
      <button className="operator" onClick={() => handleCalculate()}>=</button>
      <button className="operator" onClick={() => handleClick('+')}>+</button>
      <br />
      <button className="clear" onClick={() => handleClear()}>Clear</button>
    </div>
  );
}

export default Calculator;
