import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import HalfRating from './rating';
import './snack.css';

const action = (
    <Button color="secondary" size="small">
    Hyper Text Markup Language
  </Button>
    
  
);

const useStyles = makeStyles((theme) => ({
  root: {
    
    maxWidth: 600,
    marginTop: theme.spacing(4),
    
    
    '& > * + *': {
      marginTop: theme.spacing(2),
     
    
    },
  },
  
}));

export default function LongTextSnackbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent className={classes.FadeIn} message="HTML5"  action={action}/>
      <HalfRating/>
      <SnackbarContent className={classes.FadeIn} message="CSS3"  action={action} />
      <HalfRating/>

      <SnackbarContent className={classes.FadeIn} message="Bootstrap4"  action={action} />
      <HalfRating/>
      <SnackbarContent className={classes.FadeIn} message="javaScript"  action={action} />
      <HalfRating/>
      
      <SnackbarContent className="FadeIn" message="Jquery"  action={action} />
      <HalfRating/>
      <SnackbarContent className="FadeIn" message="Reactjs"  action={action} />
      <HalfRating/>
      
      
    </div>
  );
}
