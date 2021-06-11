import React from 'react'

export default function foo({subheading='This is subheading',heading='This is heading',}) {
    return (
        <div className="secTitle">
            <p className="titlepara">{subheading}</p>
            <h2>{heading}</h2>
        </div>
    )
}
