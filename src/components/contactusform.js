import React, {Component} from 'react';
import './contactusform.css';
import Grid from '@material-ui/core/Grid';
import SimpleMap from './map';




export default function ContactUsForm() {
    
  
    return (
        <>
      <div className="contactpage">
        <Grid container spacing={3}>
          
          <Grid item xs={12} sm={6}>
          <SimpleMap/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="contctpge">
<div className="container containerform">
<div class="text">
 Contact us</div>
<form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline">
</div>
<label for="">First Name</label>
          </div>
<div class="input-data">
            <input type="text" required />
            <div class="underline">
</div>
<label for="">Last Name</label>
          </div>
</div>
<div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline">
</div>
<label for="">Email Address</label>
          </div>
<div className="input-data">
            <input type="text" required />
            <div className="underline">
</div>
<label for="">Website Name</label>
          </div>
</div>
<div className="form-row">
          <div className="input-data textarea">

            <textarea rows="8" cols="80" required></textarea> 
            <br />
<div className="underline">
</div>
<label for="">Write your message</label>
          
   </div>
   </div>     
        <br />
<div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>
    </div>
</Grid>

</Grid>
</div>
           </>
        );
    
}
