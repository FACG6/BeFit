import React, {Component} from 'react';
import ExerciseCard from '../../MainComponents/ExerciseCard';
import { Redirect } from 'react-router-dom';
import Button from '../../MainComponents/Button';
import Nav from '../../MainComponents/Nav';
import './index.css';
const data = require('../../../utils/exercises.json').exercises;

class Exercises extends Component {
  state = {
    exercises: data,
    selectError: null,
    added: null,
  }
  handleExercises = (event) => {
    event.preventDefault();
    const nodes = event.target.querySelectorAll('input[type="radio"]');
    const checkedNodes = [];
    nodes.forEach(node => node.checked ? checkedNodes.push(node
    ) : null);
    if (!checkedNodes.length) {
      this.setState(() => ({selectError: 'Select at least one exercise!'}))
      return;
    }
   else{ 
      const allExercises = [];
    checkedNodes.forEach(node => {
      const src = node.parentElement.parentElement.querySelector('img').src;
      allExercises.push({exercise: node.name, src});
    } )
     this.setState(() => ({selectError: null, added: true}));
    const day = localStorage.clicked;
    localStorage.setItem(day, JSON.stringify(allExercises))
  }
  }

  render(){
    const { exercises, selectError} = this.state;
    return (
    <>
      <Nav />
      <h2 className='exercises-heading2'>Select Exercises:</h2>
      <form className='cards_container' onSubmit={this.handleExercises}>
        {exercises.map((exercise, index) => <ExerciseCard name ={exercise.name} src={exercise.src} key={index} />)}
        <span className='error'>{selectError}</span>
        <Button buttonClass='exercise-add' name='Add' />
        {this.state.added ? < Redirect to='/select-days'/>:null}
      </form>
    </>
    )
  } 
}

export default Exercises;