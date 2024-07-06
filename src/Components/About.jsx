import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <>
    <div className="main-box">
        <div className="image">
        <img src="../../myphoto.jpg" alt="" className='myphoto' /></div>
        <div className="content-about">
        <p className='hello'> Hello There</p>
        <h2 className='myname'>I'm Pushpendra Kumar Ahirwar</h2>
        <pre className='aboutme'>{`Hello I'm MERN Stack Developer And I Have Completed my mernStack 
      Trannig from  Becil Government Of India also I Have 
 learned some Programming language like Python, C++, Java, Kotlin
            
    `}</pre>
       <a href="../../html.pdf"> <button className='resume-button'>Download Resume</button></a>
        </div>
        <div className="button-family">
            <button className='About-button'>Hacker</button>
            <button className='About-button'>Developer</button>
            <button className='About-button'>Coder</button>
        </div>
    </div>
        </>
    )
  }
}
