import React from 'react'
import PText from '../components/PText'

export default function AboutInfoItem({
    title='this is title',
    items=['HTML','CSS']
}) {
    return (
        <div className="AboutInfoItem">
            <h1 className="AboutInfoTitle">
                {title}
            </h1>
            <div className="about_items">
                { items.map((item,index)=>(
                   <div className="item">
                     <PText>{item}</PText> 
                   </div>
                ))

                }
            </div>
        </div>
    )
}
