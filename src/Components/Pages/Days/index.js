import React, {Component} from 'react';
import Checkbox from '../../MainComponents/Checkbox';
import Button from '../../MainComponents/Button';
import { Redirect } from 'react-router-dom';
import Nav from '../../MainComponents/Nav'
import './index.css';

class Days extends Component {
state = {
days:['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
selectedError: null,
selected: false,
}
handleSubmit = (event) => {
  event.preventDefault();
  const checkedNodes = event.target.querySelectorAll('input[type=radio]:checked');
  if(!checkedNodes.length){
    this.setState({selectedError: 'Please select at least a day'});
    return;
  } 

    const selectedDays = [];
    checkedNodes.forEach(node => selectedDays.push(node.id));
    localStorage.setItem('days', selectedDays.join(','));
    this.setState({selectedError: null, selected: true});
}
render (){ 
  const {days, selectedError, selected} = this.state;
  return (
  <>
  <Nav logout={true}/>
  <form onSubmit={this.handleSubmit} className='days--container'> 
    <h2 className='days--heading2'>Select all days you want to do exercises on:</h2> 
    {days.map((day, index) => < Checkbox key={index} labelClass='days--label' inputClass='days--input' name={day}/>)}
    {selectedError ? <span style={{color:'red', fontSize:20}}>{selectedError}</span> : null}
    <Button name='Done' buttonClass='days--button' />
    {selected ? <Redirect to='/select-days'/>:null}
  </form>
  </>
  )
}
}

export default Days;


