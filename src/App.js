import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import Login from './Components/Pages/Login'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faTrashAlt,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt, faPlusCircle)

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
     <Router>
       <Route exact path='/login' component = {Login} />
       <Route exact path='/' render ={()=> <div>Hello</div>}/>
       </Router>
       </div>
    );
  }
}

export default App;
