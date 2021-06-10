import React from 'react'
import SectionTitle from '../components/SectionTitle';
import ServiceSection_item from '../components/ServicesSectionItem'
import { MdDesktopMac,MdCode,MdPhonelinkSetup} from 'react-icons/md';
export default function ServicesSection() {
    return (
        <div className="container" style={{color:"white",padding:"10rem 0"}}>
          <SectionTitle className="any" subheading="what  i do for you"
              heading="Interests"
          /> 
          <div className="services_allItems">
              <ServiceSection_item icon={<MdDesktopMac style={{width:"3rem",height:"3rem"}}/>} title="Web Dev" desc="
              I have practical knowledge of web dev. I have worked on more than 10 projects which includes 2-3 big projects.
              I mainly work on MERN stack and php projects."/>
              <ServiceSection_item icon={<MdCode style={{width:"3rem",height:"3rem"}}/>} title="Coding" 
                  desc="I also love coding and has been coding on plateforms like leetcode and codechef.
                  I have good understanding of data structure and algorithms."
              />
              <ServiceSection_item icon={<MdPhonelinkSetup style={{width:"3rem",height:"3rem"}}/>} title="App Dev" 
              desc="I have basic knowledge of App developent using React Native and android studio.In comming time I would love to do 
              projects using react native." />
          </div>
        </div>
    )
}
