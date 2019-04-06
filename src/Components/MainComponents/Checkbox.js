import React from 'react';

export default (props) => {
  const {labelClass, inputClass, name} = props;
  return (
    <div className ='item--container'>
    <label className={labelClass} htmlFor={name}>{name}</label>
    <input name={name} value={name} className={inputClass} id={name} type='radio'></input>
    </div>
  )
}
