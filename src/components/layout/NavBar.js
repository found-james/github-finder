import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NavBar extends Component {
    static defaultProps = {
        title: 'github finder',
        icon: 'fab fa-github'
      }
    
    render() {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                {this.props.title} 
            </h1>
        </nav>
    )
  }
}

export default NavBar