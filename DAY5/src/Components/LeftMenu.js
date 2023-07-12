import React from 'react';
import '../Styles/LeftMenu.css';
import {FaItunesNote,FaEllipsisH} from "react-icons/fa";
import {BiSearchAlt} from 'react-icons/bi'
import { Menu } from './Menu';
function LeftMenu() {
  return (
    <div className='leftMenu'>
        <div className='logoContainer'>
            <i><FaItunesNote/></i>
            <h2>Music</h2>
            <i><FaEllipsisH/>
            </i>
        </div>
        <div className='searchBox'>
            <input type='text' placeholder='Search...'/>
            <i className='searchicon'><BiSearchAlt/></i>
        </div>
       <Menu/>
    </div>
  )
}

export  {LeftMenu}
// named component