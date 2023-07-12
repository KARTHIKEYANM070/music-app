import React from 'react';
import '../Styles/DropDown.css';
import { Link } from 'react-router-dom';
function DropDown() {
  return (
      <div className='DROPDOWN'>
      <ul className='DROP_DOWNA'>
      <Link to='/login'><button><li style={{fontSize:"20px"}}>LogIn</li></button></Link>
      <button><li style={{fontSize:"20px"}}>LogOut</li></button>
      </ul>      
      </div>
   
  );
}

export default DropDown;