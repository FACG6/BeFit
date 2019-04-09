import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DayContainer extends Component {
  state = {
    clicked: null,
    added: null, 
  };
  handleClick = () => {
    this.setState({ clicked: [this.props.name], added: true });
    localStorage.setItem("clicked", [this.props.name]);
  };
  render() {
    const { name, iconClass, deleteDay } = this.props;
    return (
      <div className="day--card">
        <span>{name}</span>
        {!localStorage[name] || !JSON.parse(localStorage[name]).length? <FontAwesomeIcon
          className={iconClass}
          key={name}
          id={name}
          icon="plus-circle"
          onClick={this.handleClick}
        />: (
        <>
          <FontAwesomeIcon onClick={this.handleClick} icon ='edit'/>
          <FontAwesomeIcon onClick={deleteDay} icon ='trash-alt'/>
        </>
        )}
        
        {this.state.added ? <Redirect to="/exercises" /> : null}
      </div>
    );
  }
}

export default DayContainer;
