import React, { Component } from 'react'

export class UserItem extends Component {
  constructor () {
      super();
      this.state = {
          id: 'id',
          login: 'mojombo',
          avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
          html_url: 'https://github.com/mojombo'
      }
  }
  
    render() {
    return (
      <div>userItem</div>
    )
  }
}

export default UserItem