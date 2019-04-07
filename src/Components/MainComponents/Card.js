import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function({cardClass, name, src}){
  return (
    <div className={cardClass}>
      <span className="card--heading">{name}</span>
      <img alt={name} src={src} />
      <FontAwesomeIcon className='delete' icon='trash-alt' id={name} />
    </div>
  );
}


