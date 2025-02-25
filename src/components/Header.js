import React, { useEffect, useState } from 'react';
import {menus} from '../data';

import './Header.scss';
import { Link } from 'react-router-dom';


const Header = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop) 
  }
  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
  });

  const scrollCallBack = (menu) => {
    document.getElementById(menu).scrollIntoView({ behavior: 'smooth', block:'start' })
  }

  return (
    <div className={['Header',scrollPosition < 50 ? "" : "change"].join(" ")}>
      <Link to='/'><h1>ANMINJI's Portfolio</h1></Link>
      <nav>
        <ul>
          <li onClick={()=>scrollCallBack('About')}>About</li>
          <li onClick={()=>scrollCallBack('Skills')}>Skills</li>
          <li onClick={()=>scrollCallBack('Projects')}>Projects</li>
          <li onClick={()=>scrollCallBack('Designs')}>Designs</li>
          <li onClick={()=>scrollCallBack('Contact')}>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;