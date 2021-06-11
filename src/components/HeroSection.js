import React from 'react';
import Profile from '../images/profile.jpg';
import PText from './PText';
import Button from './Button';
import Arrow_down from '../images/arrow_down.png'
export default function HeroSection(){
    return(
        <div >
        <div className="hero">
            <div className="container">
            <h1 className="hero_heading">
                <span> Hello, this is </span>
                <h1 className="name">Avinash Pandey</h1>
            </h1>
        <div className="hero_img">
                <img className="my_image" src={Profile} alt="" />
           
             <div className="hero_info">
             <PText>A freelancer web designer and developer from Ghaziabad,Up. I always make websites that have unique designs and also has a good performance rate.
             </PText>
             <Button btnLink="/projects" outline="false" btnText="see my work"/>
             </div>
             <div className="hero_social">
                 <div className="hero_socila_indicator">
                     <p className="rotate">Follow</p>
                     <img className="arrow" src={Arrow_down} alt="" />
                 </div>
                 <div className="hero_social_text">
                     <ul>
                         <li className="rotate1" ><a style={{color:"white"}} href="/#" target="_blank" rel="noreferrer">FB</a></li>
                         <li className="rotate1"><a  style={{color:"white"}} href="/#" target="_blank" rel="noreferrer">LI</a></li>
                         <li className="rotate1"><a  style={{color:"white"}} href="/#" target="_blank" rel="noreferrer">TW</a></li>
                     </ul>
                 </div>
             </div>
             <div className="hero_scrollDown">
                 <p className="rotate">Scroll</p>
                 <img className="arrow" src={Arrow_down} alt="" />
             </div>
            </div>
            </div>
            </div>
        </div>
    )
}