import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Video1 from '../PortafolioVid/Main.jsx'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <br />
        <br />
        <h1>Portafolio de Videos</h1>
        <br />
        <br />
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
          <iframe src="https://player.vimeo.com/video/255117757?title=0&byline=0&portrait=0" width="700" height="349" ></iframe>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}><Video1 /></Paper>
          <Paper className={classes.paper}><Video1 /></Paper>
          <Paper className={classes.paper}><Video1 /></Paper>

        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
