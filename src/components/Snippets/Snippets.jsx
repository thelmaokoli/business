import React from 'react'
import './snippets.css'
import gf01 from '../../assets/photos/avocado.png'
import gf02 from '../../assets/photos/logs.jpeg'
import gf03 from '../../assets/photos/wooden-hideaway.jpeg'
import gf04 from '../../assets/photos/yellow-bouquet.jpeg'
import gf05 from '../../assets/photos/dark-green.jpg'
import gf06 from '../../assets/photos/green-galaxy.jpg'


const data = [
  {
    id: '0gf001',
    title: 'avocado dreaming',
    image: gf01,
    alt: 'a sliced avocado',
    github: 'https://github.com',
    demo: 'https://twitter.com'
  },
  {
    id: '0gf002',
    title: 'crackling logs',
    image: gf02,
    alt: 'crackling logs on a fire',
    github: 'https://github.com',
    demo: 'https://twitter.com'
  },
  {
    id: '0gf003',
    title: 'cosy hideaway',
    image: gf03,
    alt: 'a cozy hideaway in the forest',
    github: 'https://github.com',
    demo: 'https://twitter.com'
  },
  {
    id: '0gf004',
    title: 'yellow flowers',
    image: gf04,
    alt: 'a yellow bouquet',
    github: 'https://github.com',
    demo: 'https://twitter.com'
  },
  {
    id: '0gf005',
    title: 'green mystery',
    image: gf05,
    alt: 'dark green ombre effect background',
    github: 'https://github.com',
    demo: 'https://twitter.com'
  },
  {
    id: '0gf006',
    title: 'green galaxy',
    image: gf06,
    alt: 'a green sparkly galaxy image',
    github: 'https://github.com',
    demo: 'https://twitter.com'
  }
]

const Snippets = () => {
  return (
    <section id='snippets'>
      <h5>Recent Developments</h5>
      <h2>Projects</h2>
      <div className="container projects-wrapper">
        {
          data.map(({id, image, alt, title, github, demo}) => {
           return(
           <article key={ id } className="project">
            <div className="project-image">
              <img src={image} alt={alt} />
            </div>
              <h3>{title}</h3>
              <div className="project-cta">
              <a className='btn btn-secondary' href={github} target="_blank" rel="noopener noreferrer">link to our project</a>
              <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-main">another link </a>
              </div>        
          </article>
           )
          })
        }
      </div>
    </section>
  )
}

export default Snippets