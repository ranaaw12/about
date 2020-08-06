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
    
    <Card  className={classes.root} className="cards" onClick={() => setttShow(true)}>
      <CardActionArea className={classes.actionareaa}>
        <CardMedia
        className={classes.imgs}
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={process.env.PUBLIC_URL+"card.png"}
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
          src={process.env.PUBLIC_URL+"pic1.png"}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"pic5.png"}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"pic3.png"}
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
    
    <Card  className={classes.root} className="cards" onClick={() => sett2Show(true)}>
      <CardActionArea className={classes.actionareaa}>
        <CardMedia
        className={classes.imgs}
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={process.env.PUBLIC_URL+"pic1.png"}
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
          src={process.env.PUBLIC_URL+"pic6.png"}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"pic7.png"}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"pic8.png"}
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
    
    <Card  className={classes.root} className="cards" onClick={() => sett3Show(true)}>
      <CardActionArea className={classes.actionareaa}>
        <CardMedia
        className={classes.imgs}
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={process.env.PUBLIC_URL+"pic2.png"}
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
          src={process.env.PUBLIC_URL+"pic9.png"}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"pic10.png"}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"pic11.png"}
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
    
    <Card  className={classes.root} className="cards" onClick={() => sett4Show(true)}>
      <CardActionArea className={classes.actionareaa}>
        <CardMedia
        className={classes.imgs}
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={process.env.PUBLIC_URL+"pic3.png"}
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
          src={process.env.PUBLIC_URL+"pic12.png"}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"pic13.png"}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"pic14.png"}
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
    
    <Card  className={classes.root} className="cards" onClick={() => sett5Show(true)}>
      <CardActionArea className={classes.actionareaa}>
        <CardMedia
        className={classes.imgs}
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={process.env.PUBLIC_URL+"pic4.png"}
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
          src={process.env.PUBLIC_URL+"pic15.png"}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"pic16.png"}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+"pic17.png"}
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
