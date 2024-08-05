import React from 'react'
import './stories.css' 
import STONE from '../../assets/photos/stone.png'

import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
  {
    profile: STONE,
    nametext: 'Martha Martha',
    review: 'being a stone, I never thought it was possible for someone like me to learn yoga. My hole has been made whole',
  },
  {
    profile: STONE,
    nametext: 'Martha Martha',
    review: 'beinjnug a stone, I never thought it was possible for someone like me to learn yoga. My hole has been made whole',
  },
  {
    profile: STONE,
    nametext: 'Martha Martha',
    review: 'being a stone, I never thought it was possible for someone like me to learn yoga. My hole has been made whole',
  },
  {
    profile: STONE,
    nametext: 'Martha Martha',
    review: 'being a stone, I never thought it was possible for someone like me to learn yoga. My hole has been made whole',
  }
]

const Stories = () => {
  return (
    <section id="stories">
      <h5>Explore Our</h5>
      <h2>Stories</h2>

      <Swiper className="container stories-wrapper"
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
     {data.map(({profile, nametext, review}, index) => {
          return(
        <SwiperSlide key={index} className="story">
          <div className="author-img-div">
            <img src={profile} alt="a stone with a whole in the middle" />
           <h5 className='nametext'>{nametext}</h5>
           <small className="story-content">{review}</small> 
          </div>
        </SwiperSlide>)})}
      </Swiper>
    </section>
  )
}

export default Stories