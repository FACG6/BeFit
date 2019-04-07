import React from 'react';
import DayContainer from '../MainComponents/DayContainer';
import { Link } from 'react-router-dom';

export default () => {
    const selectedDays = localStorage.days.split(',');
return (
  <div className ='select_container'>
      <div className='introductory'>
          <p>Good Job</p>
          <p>Now click the bellow icons to add your exercises</p>
      </div>
      <div className='cards'>
          {selectedDays.map((day, index) => <DayContainer key={index} name={day}/>)}
      </div>
      <Link to='/'><button>Finished</button></Link>
  </div>
)
}