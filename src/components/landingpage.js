import React, { useEffect  } from 'react';
import {Button} from 'react-mdl';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/animate.css";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import Main from './progressbar';
import Aos from "aos";
import "aos/dist/aos.css";
import Typical from 'react-typical';
import Awais from './awaispic.jpg';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';



const LandingPage = () =>{
  useEffect(() => {
      Aos.init({duration:2000});
      
  }, []);
         
        return( 
            <>            
            <section  className="landing-grid" style={{width: '100%', margin:'auto'}}>
                <div className="overrlay">

               <div className=" flex1"> 
               <h6 className="animate__animated animate__flash animate__repeat-3 animate__slow">Hi!</h6>
               <RubberBand  duration={2000}>
                <h3 className="">Here I'm Hafiz Awais!</h3>
                </RubberBand>
                <p>
                    <Typical 
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'web Developer',
                        2000,
                        'web Designer',
                        2000,
                        'Database Manager',
                        2000,
            
                    ]}
                    />
                </p>
                </div>
                
                <div className="flex2">
                <img data-aos="fade-up" data-aos-anchor=".other-element" src={Awais} alt="my-pic"
                className="rounded-circle"/>
         </div>
                 <div data-aos="fade-left" data-aos-anchor=".other-element" className="flex3">
                 <Button raised accent ripple className="btton">Higher me!</Button>
                 </div>
                 </div>
                
            </section>
            <div  className="paragraph ovrrlayy" >
            <Slide left duration={2000}>
                     <p className="container">Hi! I am expert in to design attractive user interface, I have experienced on  
                      </p>
                      </Slide>
                      <Slide left duration={2000} >        <p>different technologies like Database Management Systems or    

                      </p>
                      </Slide>
                      <Slide left duration={2000}>
                         <p>other once. I am committed to my work. I have experienced 
                      </p>
                      </Slide>
                      <Slide left duration={2000}>
                         <p>to know valuable things of clients. My mission is to  

                         </p>
                         </Slide>
                         <Slide left duration={2000}>
                         <p>provide warm , proffessional , knowldgeable 
                         </p>
                         </Slide>
                         <Slide left duration={2000}>     <p>services to our clients.</p></Slide>
                     
                <div  className="icons container">
                <Flip top duration={2000}>
                <FontAwesomeIcon  className="icns" icon={faGem}/>
               </Flip>
               <Flip top duration={2000}>
               <FontAwesomeIcon  className="icns" icon={faClock}/>
               </Flip>
               <Flip top duration={2000}>
               <FontAwesomeIcon className="icns" icon={faStar}/>
               </Flip>

                
                 </div>
                 <div className="sub-heading container">
                     <h6>Best Services</h6>
                     <h6>24/7 Availability</h6>
                     <h6>5 Star Rating</h6>


                 </div>
                 </div>
                 
                 <div className="badge">
                     <Zoom  duration={2000}>
                     <h1>Skills</h1>
                     </Zoom>
                 <Main/>
                 
            </div>
           </>
        );
           
};
export default LandingPage;