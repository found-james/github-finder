
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar.js";
import  Alert from "./components/layout/Alert.js";

import Users from "./components/users/Users.js";
import User from "./components/users/User.js";

import Search from "./components/users/Search.js";
import About from "./components/pages/About.js";

import GithubState from "./context/github/GithubState.js";
import "./App.css";

import { userApi, usersApi, reposApi } from "./utilities/fetch.js";


export default function App () {

  
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

 


  const getUserRepos = async (username) => {
  

    try {
      const res = await reposApi ();
      setRepos ( res.data ); 
  
      console.log(res);
  
    } catch (err) {
      console.log(err);
    }

  }

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  }

    return(
      <GithubState>
        <Router>
          <div className="App">
              <NavBar title="github finder"/>
      
              <div className="container">
                <Alert alert={ alert } />
                <Switch>
                  
                  <Route exact path="/" render={ props => (
                    <>
                      <Search setAlert={ showAlert }/>
                      <Users />
                    </>
                  )} />
  
                  <Route exact path="/about" component={About} />
                  <Route  path="/user/:login" render={ props => (
                    <User {...props} getUserRepos={ getUserRepos } repos={ repos } />
                  )}/>
  
                </Switch>
              </div>
          </div>
        </Router>
      </GithubState>
    );
  
};

// async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);
    
  //   this.setState({ users: res.data, loading: false });
  // }

  // example of componentDidMount that was used to
  // populate hard coded data to serve as a placeholder 
  