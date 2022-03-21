import NavBar from './components/layout/NavBar.js';
import UserItem from './components/users/UserItem';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render () {
    return(
      <div className="App">
          <NavBar title='github finder'/>
          <UserItem />
      </div>
    );
  }
}

export default App;
