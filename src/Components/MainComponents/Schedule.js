import React, {Component} from 'react';
import Card from './Card';
import Swal from 'sweetalert2';

export default class Schedule extends Component{
  state = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    exercises: null,
    today: '',
  }

  componentDidMount(){
    const dayIndex = new Date().getDay();
    const today = this.state.days[dayIndex];
    this.setState({today})
    if (localStorage[today]) {
      this.setState({
        exercises: JSON.parse(localStorage[today]),
        today,
      })
    }
  }

  handleDelete = (name) => {
    const selectedExercises = JSON.parse(localStorage[this.state.today]);
    const deleteIndex = selectedExercises.indexOf((selectedExercises.find(exercise => exercise.exercise === name)));
    selectedExercises.splice(deleteIndex, 1);
    localStorage.setItem([this.state.today], JSON.stringify(selectedExercises));
    this.setState({'exercises': selectedExercises});
  }

  confirmPopUp = (name) => {
    Swal.fire({
      title: 'warning',
      text: 'Are you sure you want to delete this exercise?', 
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Delete',
    }).then(response=>{
      if(response.value) this.handleDelete(name);
    })
  }
  render() {
  return (
    <div className='schedule--container'>
      <p className='schedule--day'>{this.state.today}</p> 
      {this.state.exercises ? ( 
    <>
      <h3 className='exercise--heading3'>Your Exercises for today:</h3>
      <div className='exercises-list'> {this.state.exercises.map((exercise, index) => < Card cardClass='exercise--item' handleDelete={()=>this.confirmPopUp(exercise.exercise)} key={index} src={exercise.src} name={exercise.exercise}/>)} 
      </div>
    </>
    ) : (
      <h2 className='no-exercises'>No Exercises for Today</h2>
    )}
    </div>
  );
  }
}