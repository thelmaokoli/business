import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>
        What We Offer
      </h5>
      <h2>Services</h2>
      <div className="container services-wrapper">
        <article className="service">
          <div className="service-head egg-1">
            <ul className='service-list'><li>servicemore</li><li className='white'>servicing</li><li>serviced</li><li className='white'>servicemore</li></ul>
      
          </div>

          <div>
              <h3 className='service-name'>personal sessions</h3>
            </div>
        </article>
        {/** another */}
        <article className="service">
          <div className="service-head egg-2">
          <ul className='service-list'><li className='white'>servicemore</li><li>alttextfor</li><li className='white'>another</li><li>servicemore</li></ul>
        
          </div>
        

          <div>
              <h3  className='service-name'>yoga teacher certifications</h3>
            </div>
        </article> 
        {/** another */}
        <article className="service">
          <div className="service-head egg-3">
          <ul className='service-list'><li>servicemore</li><li className='white'>alttextfor</li><li>servive</li><li className='white'>servicemore</li></ul>
        
          </div>

          <div>
              <h3  className='service-name'>reach your goals</h3>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Services