import React from 'react'
import SectionTitle from '../components/SectionTitle';
import ServiceSection_item from '../components/ServicesSectionItem'
import { MdDesktopMac,MdCode,MdPhonelinkSetup} from 'react-icons/md';
export default function ServicesSection() {
    return (
        <div className="container" style={{color:"white",padding:"10rem 0"}}>
          <SectionTitle className="any" subheading="what will i do for you"
              heading="Services"
          /> 
          <div className="services_allItems">
              <ServiceSection_item icon={<MdDesktopMac style={{width:"3rem",height:"3rem"}}/>} title="Web Design" />
              <ServiceSection_item icon={<MdCode style={{width:"3rem",height:"3rem"}}/>} title="Web Design" />
              <ServiceSection_item icon={<MdPhonelinkSetup style={{width:"3rem",height:"3rem"}}/>} title="App Dev" />
          </div>
        </div>
    )
}
