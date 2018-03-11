import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Authentication extends Component {

  signIn = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    if (!password || !username) {
      alert('Please, enter all fields');
      return;
    }

    this.props.signIn({ username, password });
  }

  render() {
    const { user } = this.props;

    if (user) {
      return <Redirect to={'/'} />
    }

    return (
      <div>
        <h2>Sign in</h2>
        <div className='form-group'>
          <input name='username' type='text' ref='username' required className='form-group__input' placeholder='Username' />
        </div>
        <div className='form-group'>
          <input name='password' type='password' ref='password' required className='form-group__input' placeholder='Password' />
        </div>
        <button className='btn' onClick={this.signIn}>Sign In</button>
      </div>
    );
  }
}

export default Authentication;
