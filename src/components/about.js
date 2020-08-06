import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './about.css';
import Sliderfade from './fadeslider';
import AboutSection from "./facts";



class About extends Component{
  
    render(){
        return(
            <>
             <div className="sliderback2">
            <Sliderfade/>
            </div>

            <div className="aboutSection">
            <AboutSection/>
           </div>
        

           
          
           </>
        )
    }
}
export default About;