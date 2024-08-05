import React from 'react'
import './footer.css'
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitterFilled } from '@tabler/icons-react'

const Footer = () => {
  return (
    <footer>
      <a href="a" className="footer-logo">inner yoga</a>
      <ul className="permalink">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#benefits">benefits</a></li>
        <li><a href="#services">Services</a></li>      
        <li><a href="#snippets">Snippets</a></li>
        <li><a href="#stories">Stories</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer-social-media'>
        <a href='https://github.com'  target='_blank'><IconBrandGithub className='out' /**color="white" size={48}**//></a>
       <a href='https://linkedin.com'  target='_blank'><IconBrandLinkedin className='in' /></a>
       <a href='https://twitter.com'  target='_blank'><IconBrandTwitterFilled className='out' /></a>
    </div>

    <div className="copyright">
      <small>&copy; copyright agency all rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer