import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Menu.scss';

function Menu() {


  return (
    <div className='Menu'>
      <ul>
        <li>
          <div>About</div>
          <Link to={'/home/about'}>goto</Link>
        </li>
        <li>
          <div>skills</div>
          <Link to={'/home/skills'}>goto</Link>
        </li>
        <li>
          <div>projects</div>
          <Link to={'/home/projects'}>goto</Link>
        </li>
        <li>
          <div>designs</div>
          <Link to={'/home/designs'}>goto</Link>
        </li>
        <li>
          <div>contact</div>
          <Link to={'/home/contact'}>goto</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Menu;
