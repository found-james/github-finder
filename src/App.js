import NavBar from './components/layout/NavBar.js';
import Users from './components/users/Users.js';
import Search from './components/users/Search.js';
import  Alert from './components/layout/Alert.js';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import About from './components/pages/About.js';

class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  };

  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${ text }&client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);
    
    this.setState({ users: res.data.items, loading: false });
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }});
    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  render () {

    const { users, loading } = this.state;
    return(
      <Router>
        <div className="App">
            <NavBar title='github finder'/>
            <div className='container'>
              <Alert alert={ this.state.alert } />
              <Switch>
                <Route exact path='/' render={ props => (
                  <Fragment>
                    <Search searchUsers={ this.searchUsers } 
                            clearUsers={ this.clearUsers } 
                            showClear={ users.length > 0 ? true : false }
                            setAlert={ this.setAlert }/>
                    <Users loading={ loading } users={ users }/>
                  </Fragment>
                )} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;

// async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);
    
  //   this.setState({ users: res.data, loading: false });
  // }

  // example of componentDidMount that was used to
  // populate hard coded data to serve as a placeholder 
  