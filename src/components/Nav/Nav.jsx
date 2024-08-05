import React from 'react'
import './nav.css'
import { IconHomeBolt, IconAffiliateFilled, IconBooks, IconCheck, IconMailFilled } from '@tabler/icons-react'
// IconHome2
// benefits - experience
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><IconHomeBolt/></a>
      <a href='#about' onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><IconBooks/></a>
      <a href='#benefits' onClick={() => setActive('#benefits')} className={active === '#benefits' ? 'active' : ''}><IconCheck/></a>
      <a href='#services' onClick={() => setActive('#services')} className={active === '#services' ? 'active' : ''}><IconAffiliateFilled/></a>
      <a href='#contact' onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><IconMailFilled/></a>
    </nav>
  )
}

export default Nav