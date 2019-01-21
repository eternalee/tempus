import React from 'react';
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
  return <ListItem button component="a" {...props} />;
}

function PatientList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">

        Link to="/users/1"
        <ListItemLink href="http://google.com">
          <ListItemIcon><FaceIcon /></ListItemIcon>
          <ListItemText primary="INSERT NAME HERE" />
        </ListItemLink>
        <Divider />

      </List>

    </div>
  );
}

PatientList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientList);