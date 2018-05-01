import React from 'react'
import Paper from 'material-ui/Paper';
import axios from 'axios';

/*AddMail*/
import PhotoGal from '../components/PhotoGallery/PhotoGal.jsx'

class PhotoPg extends React.Component {
  constructor(props){
    super(props)

    this.state={
      photoList: []
    }
  }

  addMessage(name, imgLink) {
      axios.post('/opusCustomize', {
        name: this.state.name,
        imgLink: this.state.imgLink
      })
    }

    getPhoto(){
     axios.get('/photoPortfolio')
     .then(({data}) => {
       this.setState({photoList: data})
     })
   }

   componentDidMount(){
     this.getPhoto();
   }

    render() {
      return (
        <div>
         <h2></h2>
         <PhotoGal />
       </div>
      )
    }
}

export default PhotoPg;
