import React from 'react'
import "./Footer.scss";
import { MdOutlineEmail } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <h3 className='footer__heading'>Contact Me</h3>
        <div className='footer__icons'>
          <MdOutlineEmail className='footer__icons__icon' />
          <IoLogoLinkedin className='footer__icons__icon' />
          <FaGithubSquare className='footer__icons__icon' />
        </div>
      </div>
    </>
  )
}
