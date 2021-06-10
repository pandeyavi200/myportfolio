import React from 'react'
import ContactForm from '../components/ContactForm'
import {MdEmail,MdLocalPhone} from 'react-icons/md'
import ContactInfoItem from '../components/ContactInfoItem'
import SectionTitle from '../components/SectionTitle'
export default function ContactSection() {
    return (
        <div>
          <div className="container" style={{color:"white",padding:"10rem 0"}}>
           <SectionTitle heading="Contact"
               subheading="Get in Touch"
           />
           <div className="ContactSection_wrapper">
               <div className="contact_left">
               <ContactInfoItem icon={<MdLocalPhone/>}
                   text="8448221195"
               />
               <ContactInfoItem icon={<MdEmail/>}
                   text="pandeyavi200
                             @gmail.com"
               />
               <ContactInfoItem 
                   text="Ghaziabad,Uttar Pradesh"
               />
               
               </div>
               <div className="contact_right">
                <ContactForm/>
               </div>
           </div>
          </div>  
        </div>
    )
}
