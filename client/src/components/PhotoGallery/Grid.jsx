import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Pic1 from '../PhotoGallery/PhotoGal.jsx'
import Pic2 from '../PhotoGallery/Pic2.jsx'
import Pic3 from '../PhotoGallery/Pic3.jsx'
import Pic4 from '../PhotoGallery/Pic4.jsx'
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
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <br />
        <br />
        <h1>Portafolio de Fotografias</h1>
        <br />
        <br />
        <br />
        <h2>Paisajes</h2>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Pic1 />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Pic2 /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Pic3 /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Pic4 /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
