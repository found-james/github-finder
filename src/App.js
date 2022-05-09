
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar.js";
import Alert from "./components/layout/Alert.js";
import About from "./components/pages/About.js";
import Home from "./components/pages/Home.js";
import NotFound from "./components/pages/NotFound.js";
import User from "./components/users/User.js";
import GithubState from "./context/github/GithubState.js";
import AlertState from "./context/alert/AlertState.js";
import "./App.css";

export default function App () {

    return(
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
                <NavBar title="github finder"/>

                <div className="container">
                  <Alert />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/user/:login" component={User} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
            </div>
          </Router>
        </AlertState>
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
  