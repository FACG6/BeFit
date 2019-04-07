import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function({cardClass, name, src, handleDelete}){
  return (
    <div className={cardClass}>
      <span className="card--heading">{name}</span>
      <img alt={name} src={src} />
      <FontAwesomeIcon icon='trash-alt' id={name}onClick={handleDelete} className='delete' />
    </div>
  );
}


