import React, { Component } from 'react';
import '../app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'magneto',
      password: 'password1'
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin = (e) => {
    e.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        'username': this.state.username,
        'password': this.state.password
      })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === 'Authenticated') {
          res.usertype === 'doctor' ?
            this.props.history.push('/patientlist')
            : this.props.history.push(`/patient/${res.patient_id}`)
        } else {
          alert('Invalid credentials');
        }
      })
  }

  render() {
    console.log('***Login RENDERED', this.state)

    return (
      <div id='Login'>
        <h1>Login</h1>
        <form onSubmit={(e) => this.handleLogin(e)}>
          <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange} />
          <input type='text' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
          <button id='submit-button' value="Submit">submit</button>
        </form>
      </div>
    )
  }
}
