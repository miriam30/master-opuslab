import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Pic1 from '../components/PhotoGallery/PhotoGal.jsx'
import Pic2 from '../components/components/PhotoGallery/Pic2.jsx'
import Pic3 from '../components/PhotoGallery/Pic3.jsx'
import Pic4 from '../components/PhotoGallery/Pic4.jsx'
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
        <h1>Seguimiento de Contenido</h1>
        <br />
        <br />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <iframe src="https://player.vimeo.com/video/255117757?title=0&byline=0&portrait=0" width="700" height="349" ></iframe>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Paper>
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
