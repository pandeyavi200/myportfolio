import React from 'react'
import {Link} from 'react-router-dom';
import projectImg from '../images/projectImg.png'
export default function (
    {
        img=projectImg,
        title="Project Name",
        desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, tempora. ",
        git_link="https://www.youtube.com/watch?v=jOviw8Ou_Yk ",
        visit="https://unsplash.com/photos/7ZWVnVSaafY",
    }
) {
    return (
        <div style={{color:"white"}}>
          <Link to="/projects" className="projectItem_img">
              <img src={img} alt="" />
          </Link>  
        <div className="projectItem_info">
            <Link to="#">
            <div className="projectItem_title">{title}</div>
            </Link>
            <div className="visit_button">
            <button className="project_visit_btn" ><a href={git_link}>Code</a></button>
            <button className="project_visit_btn second" ><a href={visit}>Visit</a></button>
            </div>
            <p className="projectItem_desc">
                {desc}
            </p>
        </div>
        </div>
    )
}
