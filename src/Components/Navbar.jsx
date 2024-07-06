import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Newz from './Cotegory/Newz'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <div className='link-box'>
      <img src="../../newz.png" alt="" className='newz-img' />
       <Link to='' className="link">Home</Link>
        <Link to='/About' className="link">About Us</Link>
        <Link to='/Contact' className="link">Contact</Link>
        </div>
        </>
     
      )
     } 
     }
