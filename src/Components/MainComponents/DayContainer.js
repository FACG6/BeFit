import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

class DayContainer extends Component {
  state = {
    clicked: null,
    added: null, 
    daysDone: JSON.parse(localStorage.daysDone),
  };
  handleClick = name => {
    this.setState({ clicked: [name], added: true });
    localStorage.setItem("clicked", [name]);
  };
  render() {
    const {daysDone} = this.state;
    const { name, iconClass, deleteDay } = this.props;
    return (
      <div className="day--card">
        <span>{name}</span>
        {!daysDone || !daysDone.includes(name)? <FontAwesomeIcon
          className={iconClass}
          key={name}
          id={name}
          icon="plus-circle"
          onClick={() => this.handleClick(name)}
        />: (
        <>
          <FontAwesomeIcon onClick={()=>this.handleClick(name)} icon ='edit'/>
          <FontAwesomeIcon onClick={deleteDay} icon ='trash-alt'/>
        </>
        )}
        
        {this.state.added ? <Redirect to="/exercises" /> : null}
      </div>
    );
  }
}

export default DayContainer;
