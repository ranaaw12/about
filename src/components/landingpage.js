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
                <h3 className="animate__animated animate__bounce animate__repeat-3 animate__slow">Here I'm Hafiz Awais!</h3>
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
                <img data-aos="fade-up" data-aos-anchor=".other-element" src={process.env.PUBLIC_URL+"awaispic.jpg"} alt="my-pic"
                className="rounded-circle"/>
         </div>
                 <div data-aos="fade-left" data-aos-anchor=".other-element" className="flex3">
                 <Button raised accent ripple className="btton">Higher me!</Button>
                 </div>
                 </div>
                
            </section>
            <div  className="paragraph ovrrlayy" >
                     <p className="container" data-aos="fade-up" data-aos-anchor=".other-element">Hi! I am expert in to design attractive user interface, I have experienced on  
                      </p>
                      <p data-aos="fade-up" data-aos-anchor=".other-element">different technologies like Database Management Systems or    </p>
                         <p data-aos="fade-up" data-aos-anchor=".other-element">other once. I am committed to my work. I have experienced 
                      </p>
                         <p data-aos="fade-up" data-aos-anchor=".other-element">to know valuable things of clients. My mission is to  </p>
                         <p data-aos="fade-up" data-aos-anchor=".other-element">provide warm , proffessional , knowldgeable 
                         </p>
                         <p data-aos="fade-up" data-aos-anchor=".other-element">services to our clients.</p>
                     
                <div  className="icons container">
                <FontAwesomeIcon  className="icns" icon={faGem} data-aos="fade-up" data-aos-anchor=".other-element"/>
               <FontAwesomeIcon  className="icns" icon={faClock} data-aos="fade-up" data-aos-anchor=".other-element"/>
               <FontAwesomeIcon className="icns" icon={faStar} data-aos="fade-up" data-aos-anchor=".other-element"/>
               

                
                 </div>
                 <div className="sub-heading container">
                     <h6>Best Services</h6>
                     <h6>24/7 Availability</h6>
                     <h6>5 Star Rating</h6>


                 </div>
                 </div>
                 
                 <div className="badge">
                     <h1>Skills</h1>
                 <Main/>
                 
            </div>
           </>
        );
           
};
export default LandingPage;