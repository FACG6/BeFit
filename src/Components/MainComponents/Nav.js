import React from 'react';
import {NavLink} from 'react-router-dom';


function Nav () {
 return(
<nav className='nav'>
  <div className='logo'>BEFIT</div>
      <div className='links'>
        <NavLink to='/' >HOME</NavLink>
        <NavLink to = '/logout'>LOG OUT</NavLink>
  </div>
</nav>
 )
}

export default Nav;