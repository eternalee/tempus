import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './components/App';
import PatientRecord from './components/PatientRecord.jsx';
import PatientList from './components/PatientList.jsx';
import Notfound from './components/Notfound.jsx';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/patientlist' component={PatientList} />
        <Route path='/patient/:patient_id' component={PatientRecord} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));