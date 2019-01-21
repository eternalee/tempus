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
    width: '90%',
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
      patientlist: []
    }
  }

  componentDidMount() {
    fetch('/api/patient')
      .then(response => response.json())
      .then(patientlist => {
        this.setState({ patientlist });
      })
      .catch(err => console.log(err))
  }

  render() {
    const { classes } = this.props;

    if (this.props.usertype === 'doctor') {
      return (
        <div className={classes.root}>
          <h1>Patient List</h1>
          <List component="nav">
            {
              this.state.patientlist.map((patient, i) =>
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