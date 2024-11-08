import { useState } from 'react';
import './Numbers.css';

function Numbers() {
  const [display, setDisplay] = useState({ current: "0", total: "0", isInitial: true });

  function handleNumbers(value) {
    if (display.isInitial) {
      setDisplay({current: value,total: display.total,isInitial: false,});
    } else {
      setDisplay({current: display.current + value,total: display.total,isInitial: false});
    }
  }

  function handleClear() {
    setDisplay({current: "0",total: "0",isInitial: true});
  }

  return (
    <div className="numbers">
      <div className='display'>{display.current}</div>
      <button onClick={() => handleNumbers('7')}>7</button>
      <button onClick={() => handleNumbers('8')}>8</button>
      <button onClick={() => handleNumbers('9')}>9</button>

      <button onClick={() => handleNumbers('4')}>4</button>
      <button onClick={() => handleNumbers('5')}>5</button>
      <button onClick={() => handleNumbers('6')}>6</button>

      <button onClick={() => handleNumbers('1')}>1</button>
      <button onClick={() => handleNumbers('2')}>2</button>
      <button onClick={() => handleNumbers('3')}>3</button>

      <button onClick={handleClear}>C</button>
      <button onClick={() => handleNumbers('0')}>0</button>
      <button onClick={() => handleNumbers('.')}>.</button>
    </div>
  );
}

export default Numbers;
