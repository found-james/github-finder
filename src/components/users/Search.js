import React, { Component } from 'react'

export class Search extends Component {
  state = {
      text: '',
  }
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
      e.preventDefault();
      
  }
  
    render() {
    return (
      <form className='form'>
          <input type='text' 
                 name='text' 
                 placeholder='search users..' 
                 value={ this.state.text }
                 onChange={ this.onChange }
                 onSubmit={ this.onSubmit }/>
        
        <input type='submit'
               value='search'
               className='btn btn-dark btn-block' />
      </form>
    )
  }
}

export default Search