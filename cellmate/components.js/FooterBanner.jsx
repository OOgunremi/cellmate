import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const FooterBanner = ({footerBanner:{discount, largeText1, largeText2, saleTime, buttonText, midText, desc, product, smallText}}) => {
  return (

      <div className='footer-banner-container'>
        <div className='banner-desc'>
          <div className='left'>
              <h3>{midText}</h3>
            <p>{discount}</p>
              {/* <h3>{largeText1}</h3> */}
            {/* <p>{saleTime}</p> */}
          </div>
          <div className='right'>
              <h3>{largeText2}</h3>
            <p>{smallText}</p>
              <Link href={`/product/${product}`}>
                <button>{buttonText}</button>
              </Link>
            <p>{desc}</p>
            {/* <p>{saleTime}</p> */}
          </div>
        </div>
      </div>

  )
}

export default FooterBanner