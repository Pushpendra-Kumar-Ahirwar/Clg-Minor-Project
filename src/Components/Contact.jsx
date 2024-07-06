import React, { Component } from 'react'
import './Cotegory/Contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ywi4wua', 'template_ucbentu', form.current, 'oUodyksTleKDqKsra')
    .then((result) => {
    console.log(result.text);
  }, (error)=> {
    console.log(error.text)
  });
  

};
    return (
      <>
        <div className="contact">
            <h1 className='heading'>Contact Us</h1>
            <p className='para'>We will get back to you asap!</p>
            <form action="" className='form-data' ref={form} onSubmit={sendEmail}>
                <input className='firstname' type="text" placeholder='First Name' name='fname' /><input className='lastname' name='lname' type="text" placeholder='Last Name' />
                <input className='email' type="email" name="email" id=""  placeholder='Email'/><br/>
                <input type="number" className='phone' name="phone" id="" placeholder='Phone' />
                <button type="submit" className='contact-button'>Send</button>
                <p className='para2'>You may also call us at +919584449972</p>
            </form>
        </div>
        </>
    )
  }
