import React from 'react';

export default (props) => {
  const {labelClass, inputClass, name} = props;
  return (
    <>
    <label className={labelClass} htmlFor={name}>{name}</label>
    <input name={name} value={name} className={inputClass} id={name} type='checkbox'></input>
    </>
  )
}
