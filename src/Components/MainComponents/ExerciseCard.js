import React from 'react';
import Checkbox from '../MainComponents/Checkbox';

export default function({ name, src }) {
    return (
    <div className='exercise_card' key={Date.now()}>
       <span>{name}</span>
       <img src={src} alt={name} />
      <Checkbox htmlFor={name} label={null} name={name}/>
    </div>
  )
}

