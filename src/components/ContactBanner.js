import React from 'react'
import PText from '../components/PText'
import Button from '../components/Button'
export default function ContactBanner() {
    return (
        <div>
        <div className="container" style={{color:"white",padding:"10rem 0"}}>
            <div className="contactBanner_wapper">
              <PText>Have a project in mind</PText>
              <h3 className="contactbanner_heading">
              Let me help you </h3>
              <Button btnText="Contact Now" btnLink="https://pandeyavi.netlify.app/contact"/>
            </div>
        </div>
            
        </div>
    )
}
