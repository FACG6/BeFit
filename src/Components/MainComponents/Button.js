import React from "react";

function Button(props) {
  const { buttonClass, name } = props;
  return <button className={buttonClass}>{name}</button>;
}

export default Button;
