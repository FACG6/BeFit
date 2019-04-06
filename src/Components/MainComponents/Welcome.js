import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <div className='welcome--container'>
      <h2 className='welcome--heading'>Hello Mrs. Farah</h2>
      <p className='welcome--content'>Start managing your exercises by adding a schedule</p>
     <Link to='/select-days'> <FontAwesomeIcon icon='plus-circle' /></Link>
    </div>
  )
}
