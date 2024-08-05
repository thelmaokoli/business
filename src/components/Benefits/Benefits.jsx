import React from 'react'
import { IconBrandDenodo } from '@tabler/icons-react'
import './benefits.css'

const Benefits = () => {
  return (
    <section id='benefits'>
      <h5>
        Where have we been?
      </h5>
      <h2>
        Experiences
      </h2>
      <div className="container benefits-wrapper">
        <div className="benefits-common">
          <h3>Popular</h3>
          <div className='benefits-details-wrapper'>
        <article className='benefits-details'>
        <IconBrandDenodo className='benefits-icon'/>
          <div>
          <h4>durable happiness</h4>
          <small className='candy'>Another Benefit!</small>
          </div>
        </article>
        <article className='benefits-details'>
        <IconBrandDenodo className='benefits-icon'/>
          <div>
          <h4>really relaxing</h4>
          <small className='candy'>Benefit!</small>
          </div>
        </article>
        <article className='benefits-details'>
        <IconBrandDenodo className='benefits-icon'/>
          <div>
          <h4>good times</h4>
          <small className='candy'>Benefit!</small>
          </div>
        </article>
        </div>
        </div>
        {/* end of benefits common */}
        <div className="benefits-novel">
        <h3>Novel</h3>
        <div className='benefits-details-wrapper'>
        <article className='benefits-details'>
        <IconBrandDenodo className='benefits-icon'/>
          <div>
          <h4>html</h4>
          <small className='candy'>Another Benefit!</small>
          </div>
        </article>
        <article className='benefits-details'>
        <IconBrandDenodo className='benefits-icon'/>
          <div>
          <h4>breathing in and out</h4>
          <small className='candy'>Benefit!</small>
          </div>
        </article>
        <article className='benefits-details'>
        <IconBrandDenodo className='benefits-icon'/>
          <div>
          <h4>exploration</h4>
          <small className='candy'>Benefit!</small>
          </div>
        </article>
        <article className='benefits-details'>
          <IconBrandDenodo className='benefits-icon'/>
          <div>
          <h4>dance</h4>
          <small className='candy'>Benefit!</small>
          </div>
        </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits