import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert }) => {
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
        { githubContext.users.length > 0 && (<button className="btn btn-light btn-block" onClick={ githubContext.clearUsers }>clear</button>) }
      </div>
    )
   
  }
  
  Search.propTypes = {
    
    setAlert: PropTypes.func.isRequired
  }

export default Search;

