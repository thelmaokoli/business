import React from 'react'
// import Sample from '../../assets/sample.pdf'
// <a href={ Sample } download> Download Sample </a>

const CTA = () => {
  return (
    <div className='cta'>
        <a href='#contact' className='btn btn-secondary'> Download Schedule </a>
        <a href='#contact' className='btn btn-main'> Say Hi! </a>
    </div>
  )
}

export default CTA