import React, { useState } from 'react';
import "./facts.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LanguageIcon from '@material-ui/icons/Language';
import Awais from './awaispic.jpg';
import Zoom from 'react-reveal/Zoom';







export default function AboutSection() {
  return (
   <> 
<div id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>My name is Hafiz Rana M Awais, and I’m a recent Software Engineer graduate from Lahore Garrison University. I help small businesses build a strong web presence through design and consulting services. Developed numerous marketing programs (eCommerce, transport, learning based website).</p>
        </div>

        <div className="row">
          <Zoom duration={2000}>
          <div className="col-lg-4">
            <img src={Awais} class="img-fluid" alt=""/>
          </div>
          </Zoom>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="">
            <em>Innovative and deadline-driven web developer with 3+ years of experience designing and developing user-interface marketing material from initial concept to final, polished deliverable.</em>
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><ArrowForwardIosIcon/> <strong className="defineee">Website:</strong> Indevelopment</li>
                  <li><ArrowForwardIosIcon/> <strong className="defineee">Phone:</strong> +92 311 1439908</li>
                  <li><ArrowForwardIosIcon/> <strong className="defineee">City:</strong> City : Lahore, Pakistan</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><ArrowForwardIosIcon/> <strong className="defineee">Degree:</strong> Bachelour</li>
                  <li><ArrowForwardIosIcon/> <strong className="defineee">PhEmailone:</strong> ranaawais3553@gmail.com</li>
                  <li><ArrowForwardIosIcon/> <strong className="defineee">Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
            Here I use new technologies to develop your web Application. I am a  
web designiner, web developer, I design your web using 
ui/ux design, html css , Bootstrap4 hover animation  effects, 
javascript jquery and Reactjs or other affective libraries.
I have experienced on  different technologies like Database Management Systems or  
 other once. I am committed to my work. I have experienced 
to know valuable things of clients. My mission is to  
provide warm , proffessional , knowldgeable  services to our clients.



            </p>
          </div>
        </div>

      </div>
    </div>



    <div id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Appnovation’s Web Development Services can deliver and deploy a complete HTML5 solution into your business environment that is optimized for high performance with quick loading times, scalable and responsive and able to handle any increases in visitor traffic.</p>
        </div>

        <div className="row">
        <Zoom duration={2000}>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><LanguageIcon/></div>
            <h4 className="title"><a href="">HTML5 Web Design & Development</a></h4>
            <p className="description">Appnovation’s HTML5 Web Development Services can deliver and deploy a complete HTML5 solution into your business environment that is optimized for high performance with quick loading times, scalable and responsive and able to handle any increases in visitor traffic.</p>
          </div>
          </Zoom>
          <Zoom duration={2000}>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><LanguageIcon/></div>
            <h4 className="title"><a href="">Enterprise Web Development & Design</a></h4>
            <p className="description"> closely with enterprise level customers to create outstanding high performing and secure custom websites with a focus on unique, professional web design. Whatever your project requires, Appnovation has the tools and experience to ensure that your goals are not only met, but&</p>
          </div>
          </Zoom>
          <Zoom duration={2000}>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><LanguageIcon/></div>
            <h4 className="title"><a href="">Laravel Design & Development</a></h4>
            <p className="description">Using an agile development methodology to deliver our Laravel-based solutions, Appnovation’s expert Laravel developers can design and build web-based properties and/or applications that will meet your specific user, business, industry and/or vertical needs.</p>
          </div>
          </Zoom>
          <Zoom duration={2000}>
          
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><LanguageIcon/></div>
            <h4 className="title"><a href="">Reactjs Design & Development</a></h4>
            <p className="description">Appnovation’s Reactjs Web Development Services can deliver and deploy a complete HTML5 solution into your business environment that is optimized for high performance with quick loading times, scalable and responsive and able to handle any increases in visitor traffic.</p>
          </div>
          </Zoom>
          <Zoom duration={2000}>

          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><LanguageIcon/></div>
            <h4 className="title"><a href="">Bootstrap4 Design & Development</a></h4>
            <p className="description">Appnovation’s Bootstrap4 Web Development Services can deliver and deploy a complete HTML5 solution into your business environment that is optimized for high performance with quick loading times, scalable and responsive and able to handle any increases in visitor traffic.</p>
          </div>
        </Zoom>
        <Zoom duration={2000}>

          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><LanguageIcon/></div>
            <h4 className="title"><a href="">HTML5 CSS3 javascript jquery Design & Development</a></h4>
            <p className="description">Appnovation’s HTML5 CSS3 javascript jquery Web Development Services can deliver and deploy a complete HTML5 solution into your business environment that is optimized for high performance with quick loading times, scalable and responsive and able to handle any increases in visitor traffic.</p>
          </div>
          </Zoom>
        </div>

      </div>
    </div>


</>

    
  );
}
