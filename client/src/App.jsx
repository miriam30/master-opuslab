import React from 'react';
import ReactDOM from 'react-dom';

/* Base components*/

import Footer from '../src/components/base/footer.jsx'
import HeaderBar from '../src/components/base/menu.jsx'
import MainVideo from '../src/components/HomePage/video.jsx'
import AddMailPg from '../src/pages/addMailPg.jsx'
import About from '../src/components/about/AboutUs.jsx'
import WorkShop from '../src/components/Workshop/WorkshopPg.jsx'

/*Pages*/
import PhotoGrid from '../src/components/PhotoGallery/Grid.jsx'
import VideoP from '../src/components/PortafolioVid/Layout.jsx'

const App = () => {
  return (
    <div>
    <HeaderBar />
      <h1 > Hello world! </h1>
      <PhotoGrid />
      <VideoP />
      <Footer />
    </div>
)
}


ReactDOM.render( < App / > , document.getElementById('app'));
