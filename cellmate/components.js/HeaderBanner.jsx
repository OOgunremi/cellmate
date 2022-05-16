import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
const HeaderBanner = ({headerBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        {/* <p className='beats-solo'>{headerBanner.smallText}</p> */}
        {/* <h2>{headerBanner.smallText}</h2> */}
        <h1>{headerBanner.largeText2}</h1>
        <h3>{headerBanner.midText}</h3>
        <img src={urlFor(headerBanner.image)} alt='Mobilephones' className='hero-banner-image'/>
      </div>
      <div>
        <Link href={`/product/${headerBanner.product}`}>
          <button type='button'>{headerBanner.buttonText}</button>
        </Link>
      </div>
      <div className='desc'>
        <h5>Details</h5>
        <p>{headerBanner.desc}</p>
      </div>
    </div>
  )
}

export default HeaderBanner