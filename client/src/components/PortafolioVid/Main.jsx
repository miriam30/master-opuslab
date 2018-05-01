import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

class Video1 extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    open: false,
  }
  this.handleClickOpen=this.handleClickOpen.bind(this)
  this.handleClose= this.handleClose.bind(this)
}

  handleClickOpen(e) {
    this.setState({ open: true });
  };

  handleClose(e) {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
      <iframe src="https://player.vimeo.com/video/255117757?title=0&byline=0&portrait=0" width="120" height="68" frameborder="3"></iframe>
      <h2>OpusLab video</h2>
        <Button style={{width:'500px'}} onClick={this.handleClickOpen}>
        <Card style={{width:'500px'}}>Video realizado para celebrar los 100 a&ntilde;os de la figura del Agente Aduanal</Card>
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Yucatan"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
<iframe src="https://player.vimeo.com/video/255117757?title=0&byline=0&portrait=0" width="750" height="422" frameborder="0" ></iframe>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              <img height ='40' width ='40'src='https://www.freeiconspng.com/uploads/close-icon-29.png' />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Video1;
