import React from 'react';
import Welcome from '../../MainComponents/Welcome';
import Nav from '../../MainComponents/Nav'; 
import './index.css'

export default (props) => {
  return (
    <>
    <Nav />
    {localStorage.plan ? <div>Plan</div>: <Welcome />}
    </>
  )

}