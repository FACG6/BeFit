import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import './App.css'
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Days from './Components/Pages/Days';
import SelectedDays from './Components/Pages/SelectedDays';

import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faTrashAlt,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons'

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

library.add(faTrashAlt, faPlusCircle)

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
     <Router>
       <Route exact path='/login' render={()=> localStorage.login? <Redirect to='/' />: <Login />} />
       <Route exact path='/' render ={()=> localStorage.login? <Home/>: <Redirect to='/login'/>}/>
       <Route exact path='/days' render ={()=> localStorage.login? <Days/>: <Redirect to='/login'/>}/>
       <Route exact path='/select-days' render ={()=> localStorage.login? <SelectedDays/>: <Redirect to='/login'/>}/>
       </Router>
       </div>
    );
  }
}

export default App;

