import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
      text: '',
  }
  
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
      e.preventDefault();
      this.props.searchUsers( this.state.text );
      this.setState({ text: '' });
  }
  
    render() {
    return (
      <div>
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
        { this.props.showClear && ( <button className='btn btn-light btn-block' 
                                            onClick={ this.props.clearUsers }>clear</button>)
        }
      </div>
    )
  }
}

export default Search

