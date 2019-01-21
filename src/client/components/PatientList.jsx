import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FaceIcon from '@material-ui/icons/Face';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink(props) {
  return <ListItem button component="span" {...props} />;
}

class PatientList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      patientList: [],
      filteredList: []
    }
  }

  componentDidMount() {
    fetch('/api/patient')
      .then(response => response.json())
      .then(patientList => {
        this.setState({
          patientList: patientList,
          filteredList: patientList
        });
      })
      .catch(err => console.log(err))
  }

  handleFilter = (e) => {
    e.preventDefault();
    let currentList = [];
    let newList = [];

    // If the search bar isn't empty, filter the patient list with the searchterm
    if (e.target.value !== "") {
      const searchterm = e.target.value.toLowerCase();
      currentList = this.state.patientList;

      for (let obj of currentList) {
        if (obj['name'].toLowerCase().includes(searchterm)) newList.push(obj)
      }
    } else {
      // If the search bar is empty, set newList to original patient list
      newList = this.state.patientList;
    }
    this.setState({
      filteredList: newList
    });
  }

  render() {
    const { classes } = this.props;

    if (this.props.usertype === 'doctor') {
      return (
        <div>
          <input type="text" id="SearchBox" onChange={this.handleFilter} placeholder="Search..." />
          <div className={classes.root}>
            <h1>Patient List</h1>
            <List component="nav">
              {
                this.state.filteredList.map((patient, i) =>
                  <Link to={`/patient/${patient.patient_id}`} key={i}>
                    <ListItemLink >
                      <ListItemIcon><FaceIcon /></ListItemIcon>
                      <ListItemText primary={patient.name} />
                    </ListItemLink>
                    <Divider />
                  </Link>
                )
              }
            </List>
          </div >
        </div>
      )
    } else {
      return (
        <h1>Permission Denied</h1>
      )
    }
  }
}

PatientList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PatientList);