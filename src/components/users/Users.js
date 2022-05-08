import React from "react"; 
import UserItem from "./UserItem";
import Spinner from"../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {

    return loading ? <Spinner /> : ( <div className="users-styles"> { users.map( user => (<UserItem key={ user.id } user={ user }/>) )} </div> )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users;

