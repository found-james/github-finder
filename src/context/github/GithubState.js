import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext.js";
import GithubReducer from "./githubReducer.js";
import { userApi, usersApi, reposApi } from "../../utilities/fetch.js";

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USERS
} from "../types";

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async text => {    
        setLoading();
        
        try { 

          const res = await usersApi ( text );
          dispatch({ 
              type: SEARCH_USERS,
              payload: res.data.items
          });
        
        } catch (err) {
          console.log(err);
        }
    }

  const clearUsers = () => dispatch({ type: CLEAR_USERS });


    const setLoading = () => dispatch({ type: SET_LOADING });

    return <GithubContext.Provider value={{ users: state.users, user: state.user, repos: state.repos, loading: state.loading, searchUsers, clearUsers}}>
        {props.children}

    </GithubContext.Provider>
}

export default GithubState;