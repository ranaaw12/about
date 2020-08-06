import React, {Component} from 'react';

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './footer.css';
import {Button} from 'react-mdl';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcCall from '@material-ui/icons/AddIcCall'
import AddLocation from '@material-ui/icons/AddLocation'
import Email from '@material-ui/icons/Email'


class Footer extends Component{
  render(){
      return( 

<footer>
      <div className="main-content">
        <div className="left box">
          <h2>
About us</h2>
<div className="content">
            <p>
Here I use new technologies to develop your web Application. I am a  
web designiner, web developer, I design your web using 
ui/ux design, html css , Bootstrap4 hover animation  effects, 
javascript jquery and Reactjs or other affective libraries.</p>

<div class="social-menu">
   <ul>
    <li><Link className="fs" href="/"><YouTubeIcon className="fa"/></Link></li>
    <li><Link className="fs" href="/"><FacebookIcon  className="fa"/></Link></li>
    <li><Link className="fs" href="/"><LinkedInIcon className="fa"/></Link></li>
    <li><Link className="fs" href="/"><InstagramIcon className="fa"/></Link></li>
    <li><Link className="fs" href="/"><TwitterIcon className="fa"/></Link></li>
  </ul>
</div>



              
</div>
</div>
<div className="center box">
          <h2>
Address</h2>
<div className="content">
            <div className="place">
              <span><AddLocation className="fas"/></span>
              <span className="text">Lahore, Pakistan</span>
            </div>
<div class="phone">
              <span><AddIcCall className="fas"/></span>
              <span className="text">+311-1439908</span>
            </div>
<div class="email">
              <span><Email className="fas"/></span>
              <span className="text">ranaawais3553@gmail.com</span>
            </div>
</div>
</div>
<div className="right box">
          <h2>
Contact us</h2>
<div className="content">
            <form action="#">
            <div class="email">
                <div class="text">
Email</div>
<input type="email" required />
              </div>
<div class="msg">
                <div class="text">
Message </div>

<textarea className="msgForm" rows="2" cols="25" required></textarea>
              <br />
              </div>

<Button raised accent ripple className="btton">Send</Button>

              
              </form>
              </div>
              </div>
              </div>
<div className="bottom">
<center>
          <span className="credit">Created By <Link href="/">RanaAwais</Link> | </span>
          <span className="far fa-copyright"></span> 2020 All rights reserved.
        </center>
</div>


</footer>

)
    }
}
export default Footer;