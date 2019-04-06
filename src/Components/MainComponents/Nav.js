import React from 'react';
import {NavLink} from 'react-router-dom';


function Nav (props) {
  const {logout} = props
 return(
<nav className='nav'>
  <div className='logo'>BEFIT</div>
      <div className='links'>
        <NavLink to='/' >HOME</NavLink>
      {logout ==='true' ? (
        <NavLink to = '/logout'>LOG OUT</NavLink>
      ): null}
        
  </div>
</nav>
 )
}

export default Nav;
