import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DayContainer extends Component {
  state = {
    clicked: null,
    added: null
  };
  handleClick = name => {
    this.setState(() => ({ clicked: [name], added: true }));
    localStorage.setItem("clicked", [name]);
  };
  render() {
    const { name, iconClass } = this.props;
    return (
      <div className="day--card">
        <span>{name}</span>
        <FontAwesomeIcon
          className={iconClass}
          key={name}
          id={name}
          icon="plus-circle"
          onClick={() => this.handleClick(name)}
        />
        {this.state.added ? <Redirect to="/exercises" /> : null}
      </div>
    );
  }
}

export default DayContainer;
