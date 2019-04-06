import React, { Component } from 'react';
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
      <div className="App">
      Hello
      </div>
    );
  }
}

export default App;
