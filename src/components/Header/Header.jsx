import React from 'react'
import CTA from './CTA'
import STONES from '../../assets/photos/stones.png'
import HeaderSocialMedia from './HeaderSocialMedia'
import './header.css'


const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5 className='hey'>Discover</h5>
        <h1>Inner Peace</h1>
        <h5 className='header-description'>a studio for... yoga, stretching, <span className='and'>&</span> breathwork</h5>
        <h3 className='candy tagline'>Reliable and inspired classes</h3>
        <CTA/>
 
        

        <div className='main-img-div'><img src={ STONES } alt='an avocado split in half, beautiful and juicy'/></div>
        <HeaderSocialMedia/>
        <a href='#about' className='scroll'>Scroll Down</a>


      </div>
    </header>
  )
}

export default Header