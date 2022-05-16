import React from 'react';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 CellMate All rights reserved</p>
      <p className='icons'>
        <a href='' target='_blank'><AiFillFacebook/></a>
        <a href='' target='_blank'><AiOutlineTwitter/></a>
        <a href='' target='_blank'><AiFillInstagram /></a>
        <a href='' target='_blank'><AiFillLinkedin /></a>
      </p>
    </div>
  )
}
export default Footer