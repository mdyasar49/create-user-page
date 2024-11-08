import React from 'react';
import './Equals.css';
import Numbers from './Numbers';
import Operators from './Operators';
import Number from './Number';
function Equals () {
    const[display,setDisplay]=React.useState(0);
    function handleEquals () {
        
        setDisplay({<><Operators/></>});
    }
    return(
        <div>
        <div className="equals">
            <button onClick={handleEquals}>=</button>  
            <br/>       
        </div>
        <div className="display" value="0">{display}</div> 
        </div>
    )
}
export default Equals;