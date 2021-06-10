import React,{useState,useEffect} from 'react'
import {MdSearch} from 'react-icons/md'
import SectionTitle from '../components/SectionTitle'
import ProjectItem from '../components/ProjectItems'
import ProjectInfo from '../data/projects';
export default function Projects() {
    const [searchText, setsearchText] = useState('');
    const [ProjectData, setProjectData] = useState(ProjectInfo);
    useEffect(()=>{
        if(searchText==='') return;
        setProjectData(()=>
        ProjectInfo.filter((item)=>
        item.name.toLocaleLowerCase().match(searchText.toLowerCase()))
        );
    },[searchText]);
    function handleChange(e) {
        e.preventDefault();
        setsearchText(e.target.value);
        if(!e.target.value.length > 0){
            setProjectData(ProjectInfo);
        }
    }
    return (
        <div>
           <div className="container" style={{color:"white",padding:"10rem 0"}}>
            <SectionTitle heading="Projects" subheading="some 
            of my recent projects" />
            <div className="projects_searchbar">
                <form action="">
                    <input type="text" 
                     value={searchText}
                     onChange={handleChange}
                     placeholder="Project Name"
                     />
                    <MdSearch className="search_icon"/>
                </form>
            </div>
            <div className="projects_allItems_page">
            {ProjectData.map((item)=>(
                <ProjectItem
                    key={item.id}
                    title={item.name}
                    desc={item.desc}
                    img={item.img}
                    git_link={item.git_link}
                    visit={item.visit}
                />
            ))}
            </div>
           </div>
        </div>
    )
}
