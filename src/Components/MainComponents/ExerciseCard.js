import React from 'react';

export default function({ name, src }) {
    return (
    <div className='exercise_card' key={Date.now()}>
       <span className='exercise-name'>{name}</span>
       <img className='exercise-img' src={src} alt={name} />
       <input name={name} className='exercise-checkbox' id={name} type='radio'></input>
    </div>
  )
}

