import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './badge.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PeopleIcon from '@material-ui/icons/People';
import BallotIcon from '@material-ui/icons/Ballot';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Avataar from './pics/avataar.jpg'; 
import Avataar2 from './pics/avataar2.jpg';
import Awais from './pics/awaispic.jpg'; 



const useStyles = makeStyles((theme) => ({
  root: {
      padding:'0',
      margin:'0',

    display: 'flex',
    
    width:'100%',
    justifyContent:'center',
    marginBottom:'20px',
    
    
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  child:{
    padding:'0',
    margin:'0',

  display: 'flex',
textAlign:'center',
  width:'100%',
  justifyContent:'center',
  marginTop:'-2rem',
  
  '& > *': {
    margin: theme.spacing(1),
  },
},
subchild:{
  padding:'0',
  margin:'0',
fontWeight: '600',
display: 'flex',
textAlign:'center',
width:'100%',
justifyContent:'center',
marginTop:'-3rem',


'& > *': {
  margin: theme.spacing(3),
},
},
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    transition:'0.75s',
    "&:hover":{
      transform:'scale(1.2)',
    }
  },
  
  
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <>
    

    <div id="facts" className="facts">
      <div className="container">

        <div className="section-title">
          <h2>Facts</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <InsertEmoticonIcon className="iconsmile" style={{ fontSize: 40 }}/>
              <span >232</span>
              <p><strong>Happy Clients</strong> consequuntur quae</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
            <BallotIcon className="iconsmile"/>
              <span>521</span>
              <p><strong>Projects</strong> adipisci atque cum quia aut</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
            <QueryBuilderIcon className="iconsmile"/>
              <span >1,463</span>
              <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <PeopleIcon className="iconsmile"/>
              <span>15</span>
              <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    
    <div >
      <div className={classes.root}>
      <Avatar className={classes.large} alt="Remy Sharp" src={Avataar} />
      
      <Avatar className={classes.large} alt="Travis Howard" src={Avataar2} />
      <Avatar className={classes.large} alt="Cindy Baker" src={Awais} />
    </div>
    <div className={classes.child}>
    <h4>Jena Karlis</h4>
    <h4>Alias Charles</h4>
      
      <h4>Rana Owais</h4>
    </div>
    <div className={classes.subchild}>
    <p>Freelancer</p>
    <p>Enterprenour</p>
      
      <p>Freelancer</p>
    </div>
    </div>

    </>
  );
}