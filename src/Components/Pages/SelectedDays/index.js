import React, { Component } from "react";
import DayContainer from "../../MainComponents/DayContainer";
import { Redirect } from "react-router-dom";
import "./index.css";
import Swal from "sweetalert2";

export default class SelectedDays extends Component {
  state = {
    finished: false
  };

  handleClick = (event)=> {
    const selectedDays = JSON.parse(localStorage.days);
    if (selectedDays.every(day => localStorage[day])) {
      this.setState({finished: true})
    } else {
      Swal.fire({
        type: "error",
        showConfirmButton: false,
        text: "Add Exercises to all days!!",
        timer: 2000
      });
    }
  }

  render() {
    const selectedDays = JSON.parse(localStorage.days);
    return (
      <>
        <div className="select_container">
          <div className="introductory">
            <p>Good Job</p>
            <p>Now click the bellow icons to add your exercises</p>
          </div>
          <div className="cards">
            {selectedDays.map((day, index) => (
              <DayContainer iconClass="add-icon" key={index} name={day} />
            ))}
            <button onClick={this.handleClick} className="add-exercise">
              Finished
            </button>
            {this.state.finished ? <Redirect to="/" /> : null}
          </div>
        </div>
      </>
    );
  }
}
