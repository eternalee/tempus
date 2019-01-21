import React, { Component } from 'react';
import '../app.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login.jsx';
import PatientList from './PatientList.jsx';
import PatientRecord from './PatientRecord.jsx';
import Notfound from './Notfound.jsx';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      usertype: '',
      patient_id: ''
    };
  }

  setUsertypePatientId = (usertype, patientId) => {
    this.setState({
      usertype: usertype,
      patient_id: patientId
    });
  }

  render() {
    return (
      <Router>
        <div id='App'>
          <Switch>
            <Route exact path='/' render={(props) => <Login {...props} usertype={this.state.usertype} setUsertypePatientId={this.setUsertypePatientId} />} />
            <Route path='/patientlist' render={(props) => <PatientList {...props} usertype={this.state.usertype} />} />
            <Route path='/patient/:patient_id' render={(props) => <PatientRecord {...props} usertype={this.state.usertype} patient_id={this.state.patient_id} />} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
