import React from 'react'
import SectionTitle from '../components/SectionTitle'
import PText from '../components/PText';
import Button from '../components/Button';
import About_img from '../images/about_img.png'
export default function foo() {
    return (
        <div style={{margin:"10rem 0"}}>
            <div className="container about_sec">
                <div className="aboutSection_left">
                 <SectionTitle subheading="Let me introduce myself"
                     heading='About me'
                 />
                 <PText>I am working as a freelancer web designer and developer from last 10 months. I love to design and make new web experiences for the people</PText>
              
                <div className="about_sec_button">
                <Button className="left" btnLink="/projects"
                    btnText="Works"
                />
                <Button className="right_about_button" btnLink="/about" btnText="Read More"  />
                </div>
                </div>
                <div className="aboutection_right">
                    <img className="about_img" src={About_img} alt="" />
                </div>
            </div>
        </div>
    )
}
