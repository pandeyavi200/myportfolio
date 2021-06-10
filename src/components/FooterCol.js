import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterCol(
    {
        heading='col-heading',
        links=[
            {
             type:'link',
             title:'Home',
             path:'/home',
            },
            {
                type:'link',
                title:'About',
                path:'/about',
               },
        ]

    }
) {
    return (
        <div style={{color:"white"}}>
            <h1 className="heading_item">{heading}</h1>
            <ul className="list_un">
             {
                 links.map((item,index)=>(
                     <li key={index}>
                     {
                         item.type==='link'?(
                             <Link to={item.path} >{item.title}</Link>
                         ):(
                             <a href={item.path} target="_blank"
                             rel="noreferrer">
                               {item.title}
                             </a>
                         )
                     }

                     </li>
                 ))
             }
            </ul>
        </div>
    )
}
