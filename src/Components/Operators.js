import React, { useState } from 'react';
import './Operators.css';
import Numbers from './Numbers';
import Number from './Number';

function Operators() {
  const [display, setDisplay] = useState('');

  function handleOperator(operator) {
    switch (operator) {
      case '+':
        setDisplay({Numbers(display.current)}+{Number(display1.current));
        break;
      case '-':
        setDisplay(<><Numbers/>-<Number/></>);
        break;
      case '*':
        setDisplay(<><Numbers/>*<Number/></>);
        break;
      case '/':
        setDisplay(<><Numbers/>/<Number/></>);
        break;
      default:
        setDisplay('');
        break;
    }
    
    
    setDisplay(operator);
  }

  function handleClear() {
    setDisplay('');
  }

  return (
    <div className="operators">
      <div className='display1'>{display}</div>
      <button onClick={() => handleOperator('/')}>/</button>
      <button onClick={() => handleOperator('*')}>*</button>
      <button onClick={() => handleOperator('-')}>-</button>
      <button onClick={() => handleOperator('+')}>+</button>
      <button onClick={handleClear}>C</button>
    </div>
  );
}

export default Operators;
