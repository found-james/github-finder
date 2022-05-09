import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import GithubContext from "../../context/github/githubContext";

const Search = ({ showClear, clearUsers, setAlert }) => {
  const githubContext = useContext (GithubContext);

  const [text, setText] = useState("");
  
  const onChange = (e) => setText( e.target.value );
  const onSubmit = (e) => {
      e.preventDefault();
        if (text === ""){
          setAlert("please enter something", "light");
        } else {
          githubContext.searchUsers( text );
          setText("");
        }
    }
  
    return ( 
      <div>
        <form className="form" onSubmit={ onSubmit } >
          <input type="text" name="text" placeholder="search users.." value={ text } onChange={ onChange } />

          <input type="submit" value="search" className="btn btn-dark btn-block" />
        </form>
        { showClear && (<button className="btn btn-light btn-block" onClick={ clearUsers }>clear</button>) }
      </div>
    )
   
  }
  
  Search.propTypes = {
    
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  }

export default Search;

