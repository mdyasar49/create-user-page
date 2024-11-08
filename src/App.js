
import React, { useState } from 'react';
import './App.css';

function App() {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className='container'>
      <center>
        <header>
          <h1>Create a New Account</h1>
        </header>
        <div className='input-1'>
          <label>Name:</label>                                                                                
          <input type='text' placeholder='Name' style={{margin: '10px 0px'}}/>
        </div>
        <br />
        <div className='input-3'>
          <label>Email:</label>
          <input type='email' placeholder='Email' />
        </div>
        <br />
        <div className='input-4'>
          <label>Password:</label>
          <input type='password' placeholder='Password' />
        </div>
        <br />
        <div className='input-5'>
          <label>Conform Password:</label>
          <input type='password' placeholder='Conform Password' />
        </div>
        <br />
        <div className='button'>
          <button style={{backgroundColor: 'greenyellow',color: 'black',fontSize: '20px',padding: '10px 60px',borderRadius: '5px',margin: '10px 0px',cursor: 'pointer'}} onClick={handleSubmit}>Create a New Account</button>
        </div>

        {popupVisible && (
        <div className="popup">
            <button className="close-popup" onClick={closePopup}>Close</button>
            <h1><b>Login successful!</b></h1>
        </div>
      )}
	  
      </center>
    </div>
  );
}

export default App;
