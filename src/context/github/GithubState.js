import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext.js";
import GithubReducer from "./githubReducer.js";
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

    return <GithubContext.Provider value={{ users: state.users, user: state.user, repos: state.repos, loading: state.loading}}>
        {props.children}

    </GithubContext.Provider>
}

export default GithubState;