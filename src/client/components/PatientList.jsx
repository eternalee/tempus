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
    width: '80%',
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
  //   const { classes } = props;
  render() {
    return (
      <div className={classes.root}>
        {/* <List component="nav"> */}
        {
          this.state.patientlist.map(patient =>
            <Link to={`/patient/${patient.patient_id}`}>
              <ListItemLink >
                <ListItemIcon><FaceIcon /></ListItemIcon>
                <ListItemText primary={patient.name} />
              </ListItemLink>
              <Divider />
            </Link>
          )
        }
        {/* </List> */}
      </div>
    )
  }
}

PatientList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PatientList);