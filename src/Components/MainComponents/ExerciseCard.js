import React from 'react';

export default function({ name, src, onClick }) {
    return (
    <div onClick={onClick} className='exercise_card' key={Date.now()}>
       <span className='exercise-name'>{name}</span>
       <img className='exercise-img' src={src} alt={name} />
       <input name={name} className='exercise-checkbox' id={name} type='checkbox'></input>
    </div>
  )
}

