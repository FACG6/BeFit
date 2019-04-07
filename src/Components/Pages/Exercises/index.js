import React, { Component } from "react";
import ExerciseCard from "../../MainComponents/ExerciseCard";
import { Redirect } from "react-router-dom";
import Button from "../../MainComponents/Button";
import "./index.css";
import Swal from "sweetalert2";
const data = require("../../../utils/exercises.json").exercises;

class Exercises extends Component {
  state = {
    selectError: null,
    added: null,
    exercises: [],
    clicked: ""
  };

  componentDidMount() {
    this.setState({ exercises: data, clicked: localStorage.clicked });
  }

  handleCardClick = event => {
    const checkbox = event.target
      .closest("div")
      .querySelector('input[type="checkbox"]');
    checkbox.toggleAttribute("checked");
  };

  handleExercises = event => {
    event.preventDefault();
    const nodes = event.target.querySelectorAll('input[type="checkbox"]');
    const checkedNodes = [];
    nodes.forEach(node => (node.checked ? checkedNodes.push(node) : null));
    if (!checkedNodes.length) {
      this.setState(() => ({ selectError: "Select at least one exercise!" }));
      return;
    } else {
      const allExercises = [];
      checkedNodes.forEach(node => {
        const src = node.parentElement.parentElement.querySelector("img").src;
        allExercises.push({ exercise: node.name, src });
      });
      this.setState(() => ({ selectError: null }));
      const day = localStorage.clicked;
      localStorage.setItem(day, JSON.stringify(allExercises));
      localStorage.setItem("plan", true);
      this.showPop();
    }
  };

  showPop = () => {
    Swal.fire({
      text: "Added successfully!",
      type: "success",
      timer: 1000,
      showConfirmButton: false,
      position: "top-end"
    }).then(this.setState({ added: true }));
  };

  render() {
    const { exercises, selectError, clicked } = this.state;
    return (
      <>
        <span>{clicked}</span>
        <h2 className="exercises-heading2">Select Exercises:</h2>
        <form className="cards_container" onSubmit={this.handleExercises}>
          {exercises.map((exercise, index) => (
            <ExerciseCard
              onClick={this.handleCardClick}
              name={exercise.name}
              src={exercise.src}
              key={index}
            />
          ))}
          <span className="error">{selectError}</span>
          <Button buttonClass="exercise-add" name="Add" />
          {this.state.added ? <Redirect to="/select-days" /> : null}
        </form>
      </>
    );
  }
}

export default Exercises;
