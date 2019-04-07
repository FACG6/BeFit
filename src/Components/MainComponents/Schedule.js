import React from 'react';
import Card from './Card';
import Nav from './Nav';
const exercises = require('../../utils/exercises.json').exercises;

export default function Schedule(){
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = new Date().getDay();
  const today = days[dayIndex]; 
  return (
  <>
    <Nav logout={true}/>
    <div className='schedule--container'>
    <p className = 'schedule--day' > { today} </p> 
    {localStorage[today] ? ( 
    <>
      <h3 className='exercise--heading3'>Your Exercises for today:</h3>
      <div className='exercises-list'> {localStorage[today].split(',').map((exercise, index) => < Card cardClass='exercise--item' key={index} name = {exercise}/>)} 
      </div>
      </>
    ) : (
      <h2>No Exercises for Today</h2>
    )}
    </div>
    </>
  );
}