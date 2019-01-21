import React, { Component } from 'react';
import '../app.css';
import Login from './Login.jsx';
import NavBar from './NavBar.jsx';
import PatientRecord from './PatientRecord.jsx';
import SearchBox from './SearchBox.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'ravenblack',
      password: 'password2',
      usertype: '',
      loggedIn: false,
      patient_id: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin = (e) => {
    e.preventDefault();

    fetch('/api/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        'username': this.state.username,
        'password': this.state.password
      })
    })
      .then((res) => res.json())
      .then((res) => {
        res.msg === 'Authenticated' ?
          this.setState({
            loggedIn: true,
            usertype: res.usertype,
            patient_id: res.patient_id
          }) : alert('Invalid credentials');
      });
  }

  render() {
    console.log('***APP RENDERED', this.state)
    if (!this.state.loggedIn) {
      return (
        <div>
          <h1>Login</h1>
          <Login handleLogin={this.handleLogin} handleChange={this.handleChange} username={this.state.username} password={this.state.password} />
        </div>
      );
    } else if (this.state.usertype === 'doctor') {
      return (
        <div>
          <h1>Welcome Doctor</h1>
          {/* <NavBar /> */}
          {/* <SearchBox /> */}
          {/* <PatientList /> */}
          <PatientRecord usertype={this.state.usertype} patient_id={this.state.patient_id} />
        </div>
      )
    } else {
      return (
        <div>
          <h1>Welcome Patient</h1>
          {/* <NavBar /> */}
          <PatientRecord usertype={this.state.usertype} patient_id={this.state.patient_id} />
        </div>
      )
    }
  }
}
