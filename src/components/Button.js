import React from 'react'

export default function Button({btnLink="test",btnText="Test",outline=false}) {
    return (
        <div>
            <a outline={outline} className="button" href={btnLink}>{btnText}</a>
        </div>
    )
}
