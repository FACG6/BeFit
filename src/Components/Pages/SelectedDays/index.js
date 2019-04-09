import React, { Component } from "react";
import DayContainer from "../../MainComponents/DayContainer";
import { Redirect, Link } from "react-router-dom";
import "./index.css";
import Swal from "sweetalert2";

export default class SelectedDays extends Component {
  state = {
    finished: false,
    selectedDays: [],
    dayDone: null
  };

  componentDidMount() {
    const selectedDays = JSON.parse(localStorage.days);
    this.setState({ selectedDays });
  }

  handleClick = () => {
    const selectedDays = JSON.parse(localStorage.days);
    if (selectedDays.every(day => localStorage[day])) {
      localStorage.setItem("plan", true);
      this.setState({ finished: true });
    } else {
      Swal.fire({
        type: "error",
        showConfirmButton: false,
        text: "Add Exercises to all days!!",
        timer: 2000
      });
    }
  };
  deleteDay = event => {
    const name = event.target.closest("div").querySelector("span").textContent;
    const days = JSON.parse(localStorage.days);

    const dayIndex = days.indexOf(name);
    days.splice(dayIndex, 1);
    localStorage.setItem("days", JSON.stringify(days));

    const daysDone = JSON.parse(localStorage.daysDone);
    const daysDoneIndex = daysDone.indexOf(name);
    daysDone.splice(daysDoneIndex, 1);
    localStorage.setItem("daysDone", JSON.stringify(daysDone));

    localStorage.removeItem(name);

    this.setState({ selectedDays: days });
  };

  render() {
    const { selectedDays } = this.state;
    return (
        <div className="select_container">
          <div className="introductory">
            <Link to="/days">
              <span className="add-day">Add Day</span>
            </Link>
            <p>Now click the bellow icons to add your exercises</p>
          </div>
          <div className="cards">
            {selectedDays.map((day, index) => (
              <DayContainer
                deleteDay={this.deleteDay}
                iconClass="add-icon"
                key={index}
                name={day}
              />
            ))}
            <button onClick={this.handleClick} className="add-exercise">
              Finished
            </button>
            {this.state.finished ? <Redirect to="/" /> : null}
          </div>
        </div>
    );
  }
}
