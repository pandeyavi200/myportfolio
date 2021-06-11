import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutSection  from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner'
export default function Home() {
    return (
        <div>
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <ProjectsSection/>
        <ContactBanner/>
        {/* <Footer/> */}
            {/* <h1>This is hOme pAAGE</h1> */}
        </div>
    )
}
