import React from 'react'
import './about.css'
import YOGI from '../../assets/photos/yogi.jpg'
import { IconAwardFilled, IconUsers, IconBoxSeam } from '@tabler/icons-react'

const About = () => {
  return (
    <section id='about'>
     <h5 className='about-header'>Get to Know Us</h5>
     <h2>Who are Goodfriends?</h2>

     <div className="container about-wrapper">
      <div className="about-img-wrap">
        <div className="about-img">
          <img src={YOGI} className='about-img-img' alt='animated image of yoga women with legs folded'/>
        </div>
      </div>

     <div className="about">
      <div className="about-cards-wrap">
          <article className='about-card'>
            <IconAwardFilled className='about-icon'/>
          <h5>Timeline</h5>
          <small>3+ years</small>
          </article>

          <article className='about-card'>
            <IconUsers className='about-icon'/>
          <h5>Clients</h5>
          <small>50+</small>
          </article>

          <article className='about-card'>
            <IconBoxSeam className='about-icon'/>
          <h5>Projects</h5>
          <small>100 and counting</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non maxime placeat exercitationem dolores unde ut. Voluptatem, molestiae eius vel facilis laudantium repellendus deserunt magni adipisci illum consequuntur nobis quis.
        </p>
        <div className='chat'>
        <a href="#" className="btn btn-main">Let's Chat</a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About