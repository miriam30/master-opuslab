import React from 'react';
import ReactDOM from 'react-dom';

/* Base components*/
import Footer from '../src/components/base/footer.jsx'
import HeaderBar from '../src/components/base/menu.jsx'
import MainVideo from '../src/components/HomePage/video.jsx'
import Contact from '../src/components/Contact.jsx'

const App = () => {
  return (
    <div>
    <HeaderBar />
      <h1 > Hello world! </h1>
      <MainVideo />
      <Contact />
      <Footer />
    </div>
)
}


ReactDOM.render( < App / > , document.getElementById('app'));
