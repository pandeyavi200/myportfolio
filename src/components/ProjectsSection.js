import React from 'react'
import SectionTitle from '../components/SectionTitle';
import {Swiper,SwiperSlide} from 'swiper/react';
import Swipercore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import projects from '../data/projects'
import ProjectItems from '../components/ProjectItems'

Swipercore.use([Navigation]);
export default function ProjectsSection() {
    return (
        <div>
           <div className="container" style={{color:"white",padding:"10rem 0"}}>
            <SectionTitle heading="Projects" subheading="some of my recent works" />
          
           <div className="projects_allItems">
               <Swiper spaceBetween={30} slidesPerView={1}
               navigation
               breakpoints={{
                   640:{
                       slidesPerView:1,
                   },
                   768:{
                       slidesPerView:2,
                   },
                   1200:{
                       slidesPerView:3
                   },
               }}
               >
                 {projects.map((projects,index)=>{
                     if(index>=5) return null;
                     return (
                     <SwiperSlide key={projects.id}>
                     <ProjectItems title={projects.name}
                        img={projects.img}
                        desc={projects.desc}
                        git_link={projects.git_link}
                        visit={projects.visit}
                     />
                     </SwiperSlide>    
                   
                     )
                 })}
               </Swiper>
           </div>
        </div>
        </div> 
    )
}
