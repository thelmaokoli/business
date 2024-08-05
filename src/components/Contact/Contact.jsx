import React from 'react'
import './contact.css'
import { IconMailFilled } from '@tabler/icons-react'
import { IconIceCream2 } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h7ecvhq', 'template_9hqnllg', form.current, 'DnhlG-fAjNMfJIFfG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact-wrapper">
      <div className="contact-options">       
        <article className="contact">
          <IconIceCream2 className='contact-icon'/>
          <h3>Myspace</h3>
          <h4>rockyoga</h4>
          <a href="https://myspace.com" target='_blank'>send a message</a>
        </article>
        <article className="contact">
          <IconMailFilled className='contact-icon'/>
          <h3>Email</h3>
          <h4>rockyoga@gmail.com</h4>
          <a href="mailito:rockyogahey@gmail.com" target='_blank'>send a message</a>
        </article>
        <article className="contact">
          <IconBrandGithub className='contact-icon'/>
          <h3>github</h3>
          <h4>@rockyoga</h4>
          <a href="https;//github.com" target='_blank'>send a message</a>
        </article>
        </div>
      {/**<form action="">**/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" id="" placeholder='first and last name' required/>
        <input type="email" name="email" id="" placeholder='email'/>
        <textarea name="message" id="" rows="7" placeholder='type your message here' required></textarea>
        <button type="submit" value='Send' className='btn btn-main submit-form'>Submit</button>
      </form>
      </div>
    </section>
  )
}

export default Contact