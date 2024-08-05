import React from 'react'
import { IconBrandLinkedin } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconBrandTwitterFilled } from '@tabler/icons-react'
import './header.css'

const HeaderSocialMedia = () => {
  return (
    <div className='header-social-media'>
        <a href='https://github.com'  target='_blank'><IconBrandGithub className='sm out' /**color="white" size={48}**//></a>
       <a href='https://linkedin.com'  target='_blank'><IconBrandLinkedin className='sm in' /></a>
       <a href='https://twitter.com'  target='_blank'><IconBrandTwitterFilled className='sm out' /></a>
    </div>
  )
}

export default HeaderSocialMedia