import React from 'react'
import {MdPlace} from 'react-icons/md';
import PText from '../components/PText';
export default function ContactInfoItem({
    icon=<MdPlace/>,
    text='This is info',
}) {
    return (
        <div className="ContactInfoItem">
           <din className="contact_icon">{icon}</din>
           <div className="contact_info">
            <PText>{text}</PText>
           </div> 
        </div>
    )
}
