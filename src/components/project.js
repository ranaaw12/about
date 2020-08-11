
import React, { Component  } from 'react';

import './project.css';
import ImgMediaCard from './card';
import ImageAvatars from './badge';
import Sliderfade from './fadeslider';
import Zoom from 'react-reveal/Zoom';

  export default function Project(){
     
    
  

  return(
            <>
            <div className="sliderback">
            <Sliderfade/>
            </div>
            <div className="proPage">
           <div className="heading">
           <Zoom  duration={2000}>

               <h1>PROJECTS</h1>
               </Zoom>
               </div>

               
               
           <ImgMediaCard/>
            <ImageAvatars/>
           
           </div>
           </>
        );
    }
