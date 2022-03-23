import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
      text: '',
  }
  
  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  }
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
      e.preventDefault();
      this.props.searchUsers( this.state.text );
      this.setState({ text: '' });
  }
  
    render() {
    return (
      <form className='form' onSubmit={ this.onSubmit } >
          <input type='text' 
                 name='text' 
                 placeholder='search users..' 
                 value={ this.state.text }
                 onChange={ this.onChange }
                 />
        
        <input type='submit'
               value='search'
               className='btn btn-dark btn-block' />
      </form>
    )
  }
}

export default Search

// onSubmit prop in input passes onSubmit funciton
// onSubmit funciton will prevent form from being submitted
// pass a func as props with the text using state
// then use setter function function to clear input (state)
// 
// In this case the passed up 'function' to (App)
// however, function actions are not defined
// this function simply passes the state then 
// clears the state  
//
// actions must defined within the component in which
// the button will be used in
// In this case the App component