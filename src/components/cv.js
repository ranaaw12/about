import React, { useEffect  } from 'react';
import './cv.css';
import Aos from "aos";
import "aos/dist/aos.css";




const  FullWidthGrid = () => {

  useEffect(() => {
    Aos.init({duration:2000});
    
}, []);        
    

  return (
    <div id="resume" className="resume">
    <div className="container">

      <div className="section-title">
        <h2>Resume</h2>
        <p>My name is Hafiz Rana M Awais, and I’m a recent Software Engineer graduate from Lahore Garrison University. I help small businesses build a strong web presence through design and consulting services. Developed numerous marketing programs (eCommerce, transport, learning based website).</p>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <h3 className="resume-title">Sumary</h3>
          <div className="resume-item pb-0">
            <h4>Rana Owais</h4>
            <p><em>Innovative and deadline-driven web developer with 3+ years of experience designing and developing user-interface marketing material from initial concept to final, polished deliverable.</em></p>
            <ul>
              <li>Pakistan Lahore cantt.</li>
              <li>(+92) 311-1439908</li>
              <li>ranaawais3553@gmail.com</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Schooling era &amp; Web Developer</h4>
            <h5>2014 - 2016</h5>
            <p><em>Institute of Science Garrison college Lahore</em></p>
            <p>My name is Hafiz Rana M Awais, and I’ passed my scolling in 2016 from  Garrison College Lahore. This time I knew how the things  work , so i moved in technologies world</p>
          </div>
          <div className="resume-item">
            <h4>Bachelor of Software Engineering &amp; Web Developer</h4>
            <h5>2016 - 2020</h5>
            <p><em>Lahore Garrison University Institute of Technology.</em></p>
            <p>My name is Hafiz Rana M Awais, and I’m a recent Software Engineer graduate from Lahore Garrison University. I start my career in web development since 2016. Now i build user interface or small large business website , i have proficiency in web development.</p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-anchor=".other-element" data-aos-delay="100">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Senior web developer specialist</h4>
            <h5>2020 - Present</h5>
            <p><em>Freelancer </em></p>
            <ul>
              <li>Lead in the design, development, and implementation of the web, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all web materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Web development specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Freelancer</em></p>
            <ul>
              <li>Developed numerous marketing programs (eCommerce, transport, learning based website).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate website</li>
              <li>Created design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

  );
};
export default FullWidthGrid;