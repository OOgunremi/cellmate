import React from 'react';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 KoboClicks All rights reserved</p>
      <p className='icons'>
        <a href='https://www.instagram.com/koboclicks/?hl=en' target='_blank'><AiFillFacebook/></a>
        <a href='https://twitter.com/lekanogunremi' target='_blank'><AiOutlineTwitter/></a>
        <a href='https://www.instagram.com/koboclicks/?hl=en' target='_blank'><AiFillInstagram /></a>
        <a href='https://www.linkedin.com/in/oogunremi' target='_blank'><AiFillLinkedin /></a>
      </p>
    </div>
  )
}
export default Footer