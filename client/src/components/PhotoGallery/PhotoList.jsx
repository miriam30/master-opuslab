import React from 'react';
import PhotoGal from './PhotoGal.jsx'
const PhotoList = (props) =>(
  <div className='photoList'>
{props.photoList.map((photo)=><PhotoGal photo={photo}/>)}

  </div>
)
