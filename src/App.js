import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu';
import {BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';
import HeroSection from './components/HeroSection';
import {Route,Switch} from 'react-router-dom';
import Footer from '../src/components/Footer'
function App() {
  return (
    <>
    <BrowserRouter>
       <NavMenu/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route  exact path="/about" component={About}/>
         <Route  exact path="/projects" component={Projects}/>
         <Route  exact path="/contact" component={Contacts}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
    {/* <HeroSection/> */}
    </>
  );
}

export default App;
