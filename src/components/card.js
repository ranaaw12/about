import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.css';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Pic from './pics/pic.png';
import Pic1 from './pics/pic1.png';
import Pic2 from './pics/pic2.png';
import Pic3 from './pics/pic3.png';
import Pic4 from './pics/pic4.png';
import Pic5 from './pics/pic5.png';
import Pic6 from './pics/pic6.png';
import Pic7 from './pics/pic7.png';
import Pic8 from './pics/pic8.png';
import Pic9 from './pics/pic9.png';
import Pic10 from './pics/pic10.png';
import Pic11 from './pics/pic11.png';
import Pic12 from './pics/pic12.png';
import Pic13 from './pics/pic13.png';
import Pic14 from './pics/pic14.png';
import Pic15 from './pics/pic15.png';
import Pic16 from './pics/pic16.png';
import Pic17 from './pics/pic17.png';
import Pic18 from './pics/pic18.png';
import Fade from 'react-reveal/Fade';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
  imgs:{
    transition:'0.75s',
    "&:hover":{
      transform:'scale(1.2)',
    }

  },
  actionareaa:{
    backgroundColor:'#111',
    color:'white',
  },
  gridContainer:{
    paddingLeft:'55px',
    paddingRight:'55px',
    
}
  
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const [shows, setttShow] = useState(false);
  const [shows2, sett2Show] = useState(false);
  const [shows3, sett3Show] = useState(false);
  const [shows4, sett4Show] = useState(false);
  const [shows5, sett5Show] = useState(false);
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <>
    <Grid container spacing={4} className={classes.gridContainer} justify="center">
    <Grid item xs={12} sm={6} md={4}>
    <Fade bottom duration={2000}>
    <Card  className={classes.root} className="cards" onClick={() => setttShow(true)}>
      <CardActionArea className={classes.actionareaa}>
        <CardMedia
        className={classes.imgs}
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={Pic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Web Application
          </Typography>
          <Typography variant="body2" color="" component="p">
          Lead in the design, development, 
          and implementation of the web, layout, and production communication materials.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionareaa}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
</Fade>
    <Modal
        show={shows}
        onHide={() => setttShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="backcolor"
      >
        <Modal.Header closeButton className="modalheadingcolor">
          <Modal.Title id="example-custom-modal-styling-title">
            Portfolio web
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbodycolor">
          
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic5}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic3}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


          
          
          
    <div className="container">
            <h4>Using HTML5 CSS3 javaScript</h4>
          
    <ul>
              <li>Lead in the design, development, and implementation of the web, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all web materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
            </div>



        </Modal.Body>
      </Modal>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
    <Fade bottom duration={2000}>
    <Card  className={classes.root} className="cards" onClick={() => sett2Show(true)}>
      <CardActionArea className={classes.actionareaa}>
        <CardMedia
        className={classes.imgs}
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={Pic1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Web Application
          </Typography>
          <Typography variant="body2" color="" component="p">
          Supervise the assessment of all web materials in order to ensure quality and accuracy of the design
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionareaa}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Fade>
    <Modal
        show={shows2}
        onHide={() => sett2Show(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="backcolor"
      >
        <Modal.Header closeButton className="modalheadingcolor">
          <Modal.Title id="example-custom-modal-styling-title">
          Transport Web
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbodycolor">
          
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic6}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic7}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic8}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


          
          
          
    <div className="container">
            <h4>Reactjs</h4>
          
    <ul>
              <li>Lead in the design, development, and implementation of the web, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all web materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
            </div>


        </Modal.Body>
      </Modal>
    </Grid>



    <Grid item xs={12} sm={6} md={4}>
    <Fade bottom duration={2000}>
    
    <Card  className={classes.root} className="cards" onClick={() => sett3Show(true)}>
      <CardActionArea className={classes.actionareaa}>
        <CardMedia
        className={classes.imgs}
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={Pic2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Web Application
          </Typography>
          <Typography variant="body2" color="" component="p">
          Developed numerous marketing programs (eCommerce, transport, learning based website).
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionareaa}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
</Fade>
    <Modal
        show={shows3}
        onHide={() => sett3Show(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="backcolor"
      >
        <Modal.Header closeButton className="modalheadingcolor">
          <Modal.Title id="example-custom-modal-styling-title">
            Transport Web
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbodycolor">
          
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic9}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic10}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic11}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


          
          
          
    <div className="container">
            <h4>Wordpress</h4>
          
    <ul>
              <li>Lead in the design, development, and implementation of the web, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all web materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
            </div>


        </Modal.Body>
      </Modal>
    </Grid>


    <Grid item xs={12} sm={6} md={4}>
    <Fade bottom duration={2000}>
    
    <Card  className={classes.root} className="cards" onClick={() => sett4Show(true)}>
      <CardActionArea className={classes.actionareaa}>
        <CardMedia
        className={classes.imgs}
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={Pic3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Web Application
          </Typography>
          <Typography variant="body2" color="" component="p">
          Lead in the design, development, and implementation 
          of the web, layout, and production communication materials
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionareaa}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
</Fade>
    <Modal
        show={shows4}
        onHide={() => sett4Show(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="backcolor"
      >
        <Modal.Header closeButton className="modalheadingcolor">
          <Modal.Title id="example-custom-modal-styling-title">
          Portfolio Web
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbodycolor">
          
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic12}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic13}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic14}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


          
          
          
    <div className="container">
            <h4>Wordpress Web</h4>
          
    <ul>
              <li>Lead in the design, development, and implementation of the web, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all web materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
            </div>


        </Modal.Body>
      </Modal>
    </Grid>


    <Grid item xs={12} sm={6} md={4}>
    <Fade bottom duration={2000}>
    
    <Card  className={classes.root} className="cards" onClick={() => sett5Show(true)}>
      <CardActionArea className={classes.actionareaa}>
        <CardMedia
        className={classes.imgs}
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={Pic4}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Web Aplication
          </Typography>
          <Typography variant="body2" color="" component="p">
          Lead in the design, development, and implementation
           of the web, layout, and production communication materials
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionareaa}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
</Fade>
    <Modal
        show={shows5}
        onHide={() => sett5Show(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="backcolor"
      >
        <Modal.Header closeButton className="modalheadingcolor">
          <Modal.Title id="example-custom-modal-styling-title">
            Portfolio Web
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbodycolor">
          
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic15}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic16}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic17}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


          
          <div className="container">
            <h4>Reactjs</h4>
          
    <ul>
              <li>Lead in the design, development, and implementation of the web, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all web materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
            </div>

        </Modal.Body>
      </Modal>
    </Grid>







      </Grid>
</>
  );
}
