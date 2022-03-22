import NavBar from './components/layout/NavBar.js';
import Users from './components/users/Users.js';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render () {
    return(
      <div className="App">
          <NavBar title='github finder'/>
          <div className='container'>
            <Users />
          </div>
      </div>
    );
  }
}

export default App;
