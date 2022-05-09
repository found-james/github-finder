import React, { useContext } from "react"; 
import UserItem from "./UserItem";
import Spinner from"../layout/Spinner";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;

    return loading ? <Spinner /> : ( <div className="users-styles"> { users.map( user => (<UserItem key={ user.id } user={ user }/>) )} </div> )
}



export default Users;

