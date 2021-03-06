import React, { Component } from "react";
import ExerciseCard from "../../MainComponents/ExerciseCard";
import { Redirect, Link } from "react-router-dom";
import Button from "../../MainComponents/Button";
import "./index.css";
import Swal from "sweetalert2";
const data = require("../../../utils/exercises.json").exercises;

class Exercises extends Component {
  state = {
    selectError: null,
    added: null,
    exercises: [],
    clicked: "",
    alreadySelectedExercises: []
  };

  componentDidMount() {
    const clickedDay = localStorage.clicked;
    if (localStorage[clickedDay]) {
      this.setState({
        alreadySelectedExercises: JSON.parse(localStorage[clickedDay])
      });
    }
    this.setState({ exercises: data, clicked: clickedDay });
  }

  handleCardClick = event => {
    const checkbox = event.target
      .closest("div")
      .querySelector('input[type="checkbox"]');
    checkbox.toggleAttribute("checked");
  };

  handleExercises = event => {
    event.preventDefault();
    const nodes = event.target.querySelectorAll('input[type=checkbox]');
    const checkedNodes = [];
    nodes.forEach(node => (node.checked ? checkedNodes.push(node) : null));
    if(!checkedNodes.length){
      this.setState({selectError: 'Select at least one exercise!'});
      return;
    }
    const allExercises = [];
    checkedNodes.forEach(node => {
      const src = node.parentElement.parentElement.querySelector("img").src;
      allExercises.push({ exercise: node.name, src });
    });
    this.setState(() => ({ selectError: null }));
    const day = localStorage.clicked;
    if (localStorage[day]) {
      localStorage.setItem(
        day,
        JSON.stringify(JSON.parse(localStorage[day]).concat(allExercises))
      );
    } else {
      localStorage.setItem(day, JSON.stringify(allExercises));
      localStorage.setItem(
        "daysDone",
        JSON.stringify(JSON.parse(localStorage.daysDone).concat(day))
      );
      localStorage.setItem("plan", true);
    }
    this.showPop();
  };

  showPop = () => {
    Swal.fire({
      text: "Edited Successfully!",
      type: "success",
      timer: 1000,
      showConfirmButton: false,
      position: "top-end"
    }).then(this.setState({ added: true }));
  };

  confirmUncheck = name => {
    Swal.fire({
      text: "Are you sure you want to uncheck this exercise?",
      showConfirmButton: true,
      showCancelButton: true
    }).then(response => {
      if (response.value) {
        this.unCheck(name);
      }
    });
  };

  unCheck = (name) => {
    const allExercises = JSON.parse(localStorage[this.state.clicked]);
    const deleteIndex = allExercises.indexOf(
      allExercises.find(exercise => exercise.exercise === name)
    );
    allExercises.splice(deleteIndex, 1);
    localStorage.setItem(localStorage.clicked, JSON.stringify(allExercises));
    this.setState({ alreadySelectedExercises: allExercises });
  };

  render() {
    const {
      exercises,
      selectError,
      clicked,
      alreadySelectedExercises
    } = this.state;
    return (
      <>
        <span className="clicked-date">{clicked}</span>
        <h2 className="exercises-heading2">Select Exercises:</h2>
        <p className="exercises-warning">
          If you only want to delete an exercise, click on it and then click back button!
        </p>
        <form className="cards_container" onSubmit={this.handleExercises}>
          {exercises.map((exercise, index) =>
            alreadySelectedExercises.find(
              selected => selected.exercise === exercise.name
            ) ? (
              <ExerciseCard
                done={true}
                onClick={this.handleCardClick}
                name={exercise.name}
                src={exercise.src}
                key={index}
                unCheck={() => this.confirmUncheck(exercise.name)}
              />
            ) : (
              <ExerciseCard
                done={false}
                onClick={this.handleCardClick}
                name={exercise.name}
                src={exercise.src}
                key={index}
              />
            )
          )}
          <span className="error">{selectError}</span>
          <div className="button-container">
            <Button buttonClass="exercise-add" name="Done" />
            <Link to="/select-days">
              <Button buttonClass="exercise-add" name="Back" />
            </Link>
          </div>
          {this.state.added ? <Redirect to="/select-days" /> : null}
        </form>
      </>
    );
  }
}

export default Exercises;
