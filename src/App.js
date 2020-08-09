import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Textfield, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import Footer from './components/footer';
import BookIcon from '@material-ui/icons/Book';
import BallotIcon from '@material-ui/icons/Ballot';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Logo from './components/logo2.png';

class App extends Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
    
        
        <Header className="header-gradient" title=" "  scroll>
        <img  src={Logo} alt="my-pic" className="logoss"/>

            <Navigation>
            <Link to="/" className="drawerNavbar"><BookIcon className="drawerNavbar"/>Home</Link>
                    <Link className="navlink" to="/resume"><BookIcon/>Resume</Link>
                <Link className="navlink" to="/project"><BallotIcon/>Project</Link>
                <Link className="navlink" to="/about"><SentimentVerySatisfiedIcon/>About</Link>
                <Link className="navlink" to="/contact"><ContactsIcon/>Contact</Link>
            </Navigation>

             </Header>
        <Drawer  className="drawerColor">
        <img  src={Logo} alt="my-pic" className="logos"/>
            <Navigation>
            <Link to="/" className="drawerNavbar"><BookIcon className="drawerNavbar"/>Home</Link>
              <Link to="/resume" className="drawerNavbar"><BookIcon className="drawerNavbar"/>Resume</Link>
                <Link to="/project"className="drawerNavbar"><BallotIcon/>Project</Link>
                <Link to="/about"className="drawerNavbar"><SentimentVerySatisfiedIcon/>About</Link>
                <Link to="/contact"className="drawerNavbar"><ContactsIcon/>Contact</Link>
            </Navigation>
        </Drawer>

        <Content>
            <div className="page-content" />
            <Main/>
            
    <Footer/>

        </Content>
    </Layout>
</div>
  );
  }
}

export default App;
