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
      username: 'doctormagneto',
      usertype: 'doctor',
      loggedIn: false
    }
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <Login />
        </div>
      );
    } else if (this.state.type === 'doctor') {
      return (
        <div>
          <NavBar />
          <SearchBox />
          <PatientList />
        </div>
      )
    } else {
      return (
        <div>
          <NavBar />
          <PatientRecord usertype={this.state.usertype} />
        </div>
      )
    }
  }
}
