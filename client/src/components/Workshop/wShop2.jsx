import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import Button from 'material-ui/Button';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[700],
  },
});

class RecipeReviewCard extends React.Component {
  constructor(props){
    super(props)
  this.state={
    expanded: false
  }
  this.handleExpandClick = this.handleExpandClick.bind(this)
}

  handleExpandClick(e) {
    this.setState({
      expanded: !this.state.expanded }
    )
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="workShop1" className={classes.avatar}>
                O
              </Avatar>
            }
            title="Taller de Documentales"
            subheader="Junio 14, 2018"
          />
          <CardMedia
            className={classes.media}
            image="http://www.dohafilminstitute.com/content/images/image/1030/normal_3_a_team_from_the_documentary_workshop_take_their_skills_out_into_the_field_to_put_their_lessons_into_practice.jpg"
            title="workShop1"
          />
          <CardContent>

          <h3></h3>
            <Typography component="p">
              El alumno desarrollará su creatividad y habilidades utilizando su cámara
              fotográfica digital como medio de expresión. Al final del curso el participante
              conocerá la importancia de la fotografía en la vida cotidiana como registro de
              sucesos importantes y obtendrá bases de composición visual suficientes para
              proponer un discurso visual.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <Button href="http://fotoaprendiz.com/2010/02/10/que-es-un-workshop/"><h4>Sign up</h4></Button>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more">
              <img height='30px' width='30px' src='https://www.freeiconspng.com/uploads/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right--32.png' />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                <h3>Programa:</h3>
              </Typography>
              <Typography paragraph>
              1. Fundamentos de la fotografía
              <br />La luz y la percepción visual
              <br />La cámara fotográfica, funcionamiento
              </Typography>
              <Typography paragraph>
              2. Elaboración de una cámara de cartón
              </Typography>
              <Typography paragraph>
              3. Técnica fotográfica <br />Cálculo de exposición
              <br />Control de tiempo de exposición, congelados y barridos
              <br />Control de profundidad de campo
              </Typography>
              <Typography>
              4. Composición
              <br />Reglas de composición básica
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
