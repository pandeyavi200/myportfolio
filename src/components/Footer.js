import React from 'react'
import PText from '../components/PText'
import FooterCol from '../components/FooterCol'
export default function Footer() {
    return (
        <div style={{ paddingTop:"5rem" , backgroundColor:"black"}}>
        <div className="container cont" >
            <div className="footer_col1">
                <h1 className="footer_col1_title">
                    Avinash Pandey
                </h1>
                <PText>
                    A freelancer web designer and developer from 
                    Ghaziabad,Up.
                    I always make websites that have unique designs and also has a good 
                    performance rate.
                </PText>
            </div>
            <div className="footer_col2"><FooterCol heading="Important Links" 
                links={[
                    {
                    title:"Home",
                    path:'/',
                    type: 'link',
                },
                {
                    title:"About",
                    path:'/about',
                    type: 'link',
                },
                {
                    title:"Projects",
                    path:'/projects',
                    type: 'link',
                },
                {
                    title:"Contact",
                    path:'/contact',
                    type: 'link',
                },
                    
                ]}
            /></div>
            <div className="footer_col3"><FooterCol heading="Contact Info" 
             links={[
                    {
                    title:"8448221195",
                    path:'tel:+918448221195',
                   
                },
                {
                    title:"pandeyavi200@gmail.com",
                    path:'mailto:pandeyavi200@gmail.com',
                  
                },
                {
                    title:"RKGIT Collage, Raj nagar ext.  Ghaziabad",
                    path:'/',
                    
                },
                    
                ]}

            /></div>
            <div className="footer_col4"><FooterCol heading="Social Links"
                links={[
                    {
                    title:"Facebook",
                    path:'https://www.facebook.com/profile.php?id=100027141684255',
                   
                },
                {
                    title:"Instagram",
                    path:'https://www.instagram.com/_pandey_avi_/',
                  
                },
                {
                    title:"Twitter",
                    path:'https://twitter.com/home',
                    
                },
                    
                ]}
            /></div>
        </div>
          
        <div className="copyright">
                <div className="container " style={{color:"white"}}>
                    <PText>© 2021 - _pandey_avi_  </PText>
                </div>
            </div>
        </div>
        
    )
}
