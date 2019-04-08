import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function({ name, src, onClick, done, unCheck }) {
  return (
    <>
      {!done ? (
        <div onClick={onClick} className="exercise_card" key={Date.now()}>
          <span className="exercise-name">{name}</span>
          <img className="exercise-img" src={src} alt={name} />
          <input
            name={name}
            className="exercise-checkbox"
            id={name}
            type="checkbox"
          />
        </div>
      ) : (
        <div onClick={unCheck} className="exercise_card" key={Date.now()}>
          <span className="exercise-name">{name}</span>
          <img className="exercise-img" src={src} alt={name} />
          <FontAwesomeIcon
            id={name}
            className="check-icon"
            icon="check-circle"
          />
        </div>
      )}
    </>
  );
}
