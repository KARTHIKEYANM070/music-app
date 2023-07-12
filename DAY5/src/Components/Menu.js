import React from 'react';
import '../Styles/Menu.css';
function Menu() {
  return (
    <div className='Home'>
    <h1 className='head'>Menu</h1>
    <div className='navbar'>
   <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">Albums</a></li>
  <li><a href="contact.asp">Songs</a></li>
  <li><a href="contact.asp">PlayList</a></li>
  <li><a href="about.asp">Account detaills</a></li>
</ul>
</div>
    </div>
  )
}

export  {Menu}