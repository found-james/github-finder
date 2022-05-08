import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar.js";
import  Alert from "./components/layout/Alert.js";

import Users from "./components/users/Users.js";
import User from "./components/users/User.js";

import Search from "./components/users/Search.js";
import About from "./components/pages/About.js";

import "./App.css";

import { userApi, usersApi, reposApi } from "./utilities/fetch.js";
class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repo: []
  };

  searchUsers = async text => {
    
    this.setState({ loading: true });
    
    try { 
      const res = await usersApi (text);
      this.setState({ users: res.data.items, loading: false });
    
    } catch (err) {
      console.log(err);
    }

  }

  getUser = async (username) => {
    this.setState({ loading: true });

    try {
      const res = await userApi (username);
      this.setState({ user: res.data, loading: false });

    } catch (err) {
      console.log(err);
    }
  }

  getUserRepos = async (username) => {
    this.setState({ loading: true });

    try {
      const res = await reposApi ();
      this.setState({ repos: res.data, loading: false });
      console.log(res);
  
    } catch (err) {
      console.log(err);
    }

  }

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }});
    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  render () {

    const { users, user, loading, repos } = this.state;
    
    return(
      <Router>
        <div className="App">
            <NavBar title="github finder"/>

            <div className="container">
              <Alert alert={ this.state.alert } />
              <Switch>
                
                <Route exact path="/" render={ props => (
                  <>
                    <Search searchUsers={ this.searchUsers } clearUsers={ this.clearUsers } showClear={ users.length > 0 ? true : false } setAlert={ this.setAlert }/>
                    <Users loading={ loading } users={ users }/>
                  </>
                )} />

                <Route exact path="/about" component={About} />
                <Route  path="/user/:login" render={ props => (
                  <User {...props} getUser={this.getUser} getUserRepos={ this.getUserRepos } repos={ repos } user={user} loading= {loading}/>
                )}/>

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
  