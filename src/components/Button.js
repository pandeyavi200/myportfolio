import React from 'react'
import {Link} from 'react-router-dom'
export default function Button({btnLink="test",btnText="Test",outline=false}) {
    return (
        <div>
        <Link className="button" to={btnLink}>
        {btnText}
      </Link>
        </div>
    )
}
