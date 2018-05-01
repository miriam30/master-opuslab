import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import WorkShop1 from '../Workshop/wShop.jsx'
import WorkShop2 from '../Workshop/wShop2.jsx'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <img src='http://www.workshopevents.com/wp-content/uploads/2015/05/logo-clear-background-2.gif' />
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
          <WorkShop1 /></Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
          <WorkShop2 /></Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
          <WorkShop1 /></Paper>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
