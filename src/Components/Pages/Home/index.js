import React from 'react';
import Welcome from '../../MainComponents/Welcome';
import Schedule from '../../MainComponents/Schedule';
import './index.css'


export default () => {
  return (
    <>
    {localStorage.plan ? <Schedule />: <Welcome />}
    </>
  )

}