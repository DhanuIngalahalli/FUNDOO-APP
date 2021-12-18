import React from 'react'
import Icons from '../Icons/Icons'
import './Note2.css'
function Note2({notes}) {


    return (
        <div className="container">
            <div className="title">{notes.title}</div>
            <div className="description">{notes.description}</div>
           <div className="icons" > <Icons /></div>
        </div>
      
    )
}

export default Note2