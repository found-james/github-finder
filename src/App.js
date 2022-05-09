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

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const searchUsers = async text => {    
    setLoading( true );
    
    try { 
      const res = await usersApi ( text );
      setUsers( res.data.items ); 
      setLoading ( false );
    
    } catch (err) {
      console.log(err);
    }

  }

  const getUser = async (username) => {
    setLoading ( true );

    try {
      const res = await userApi (username);
      setUser ( res.data ) 
      setLoading( false );

    } catch (err) {
      console.log(err);
    }
  }

  const getUserRepos = async (username) => {
    setLoading ( true );

    try {
      const res = await reposApi ();
      setRepos ( res.data ); 
      setLoading( false );
      console.log(res);
  
    } catch (err) {
      console.log(err);
    }

  }

  const clearUsers = () =>{ setUsers([]); setLoading(false);}

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
                      <Search searchUsers={ searchUsers } clearUsers={ clearUsers } showClear={ users.length > 0 ? true : false } setAlert={ showAlert }/>
                      <Users loading={ loading } users={ users }/>
                    </>
                  )} />
  
                  <Route exact path="/about" component={About} />
                  <Route  path="/user/:login" render={ props => (
                    <User {...props} getUser={getUser} getUserRepos={ getUserRepos } repos={ repos } user={user} loading= {loading}/>
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
  