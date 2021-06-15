import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu';
import {BrowserRouter,Redirect} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';
import {Route,Switch} from 'react-router-dom';
import Footer from '../src/components/Footer'
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <>
    <BrowserRouter>
       <NavMenu/>
       <ScrollToTop/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route  exact path="/about" component={About}/>
         <Route  exact path="/projects" component={Projects}/>
         <Route  exact path="/contact" component={Contacts}/>
         <Redirect to="/" />
      </Switch>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
