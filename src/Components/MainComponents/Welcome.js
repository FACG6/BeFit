import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  return (
    <div className="welcome--container">
      <h2 className="welcome--heading">Hello Farah</h2>
      <p className="welcome--content">
        Start managing your exercises by adding a schedule
      </p>
      <Link to="/days">
        <FontAwesomeIcon className="add--icon" icon="plus-circle" />
      </Link>
    </div>
  );
};
