import React from 'react'
import { MdDesktopMac} from 'react-icons/md';
import PText from '../components/PText'
export default function ServicesSectionItem({
    icon=<MdDesktopMac/>,title="Web Design",desc=" Resize, crop and transform images, convertformats, apply image effects, add ... formats, apply image effects, add ... "
}) {
    return (
        <div style={{textAlign:"center"}}>
          <div className="servicesitem_icon">
            {/* <icon style={{width:"3rem",height:"3rem"}} /> */}
            {icon}
            </div>
            <div className="serviceItem_title">
               {title}
           
             <PText>{desc}</PText>
          </div>
          
        </div>
    )
}
