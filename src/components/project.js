
import React, { Component  } from 'react';

import './project.css';
import ImgMediaCard from './card';
import ImageAvatars from './badge';
import Sliderfade from './fadeslider';

  export default function Project(){
     
    
  

  return(
            <>
            <div className="sliderback">
            <Sliderfade/>
            </div>
            <div className="proPage">
           <div className="heading">
               <h1>PROJECTS</h1>
               </div>
               
               
           <ImgMediaCard/>
            <ImageAvatars/>
           
           </div>
           </>
        );
    }
