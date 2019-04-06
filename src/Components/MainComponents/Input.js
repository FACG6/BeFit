import React from 'react';

function Input(props) {
  const {name, type, placeholder, onChange, value} = props;
  return (
    <>
    <label htmlFor={name}>{name}</label>
    <input onChange={onChange}  value={value} id={name} type={type} placeholder ={placeholder} name={name}></input>
    </>
  )
}

export default Input;
