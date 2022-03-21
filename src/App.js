import NavBar from './components/layout/NavBar.js';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render () {
    return(
      <div className="App">
          <NavBar title='github finder'/>
      </div>
    );
  }
}

export default App;
