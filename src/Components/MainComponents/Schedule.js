import React, {Component} from 'react';
import Card from './Card';
import Nav from './Nav';

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
  render() {
  return (
  <>
    <Nav logout={true}/>
    <div className='schedule--container'>
      <p className='schedule--day'>{this.state.today}</p> 
      {this.state.exercises ? ( 
    <>
      <h3 className='exercise--heading3'>Your Exercises for today:</h3>
      <div className='exercises-list'> {this.state.exercises.map((exercise, index) => < Card cardClass='exercise--item' key={index} src={exercise.src} name={exercise.exercise}/>)} 
      </div>
    </>
    ) : (
      <h2 className='no-exercises'>No Exercises for Today</h2>
    )}
    </div>
  </>
  );
  }
}