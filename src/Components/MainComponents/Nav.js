import React from 'react';
import {NavLink} from 'react-router-dom';


function Nav (props) {
const {logout} = props
 return(
<nav className='nav'>
  <h1 className='logo'>BeFit</h1>
  <div className='links'>
    <NavLink to='/'>HOME</NavLink>
    {logout? <NavLink to = '/logout'>LOGOUT</NavLink>: null}
  </div>
</nav>
 )
}

export default Nav;

