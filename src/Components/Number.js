import { useState } from 'react';
import './Number.css';

function Number() {
  const [display1, setDisplay1] = useState({ current: "0", total: "0", isInitial: true });

  function handleNumber(value) {
    if (display1.isInitial) {
      setDisplay1({current: value,total: display1.total,isInitial: false,});
    } else {
      setDisplay1({current: display1.current + value,total: display1.total,isInitial: false});
    }
  }

  function handleClear() {
    setDisplay1({current: "0",total: "0",isInitial: true});
  }

  return (
    <div className="Number">
      <div className='display2'>{display1.current}</div>
      <button onClick={() => handleNumber('7')}>7</button>
      <button onClick={() => handleNumber('8')}>8</button>
      <button onClick={() => handleNumber('9')}>9</button>

      <button onClick={() => handleNumber('4')}>4</button>
      <button onClick={() => handleNumber('5')}>5</button>
      <button onClick={() => handleNumber('6')}>6</button>

      <button onClick={() => handleNumber('1')}>1</button>
      <button onClick={() => handleNumber('2')}>2</button>
      <button onClick={() => handleNumber('3')}>3</button>

      <button onClick={handleClear}>C</button>
      <button onClick={() => handleNumber('0')}>0</button>
      <button onClick={() => handleNumber('.')}>.</button>
    </div>
  );
}

export default Number;
