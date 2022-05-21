import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const FooterBanner = ({footerBanner:{discount, largeText1, largeText2, saleTime, buttonText, midText, desc, product, smallText, image}}) => {
  return (

      <div className='footer-banner-container'>
        <div className='banner-desc'>
          <div className='left'>
              <h3>{midText}</h3>
            {/* <p>AT</p> */}
              <h3 id='footer-left-bottom-text'>{largeText2}</h3>
          </div>
          <img className='footer-image' src='https://cdn.sanity.io/images/tht63y8i/production/a838a0c7e960a5e6edcc2425b17edee2d9b86fac-320x334.png' alt='Mobilephones'/>
          <div className='right'>
              <h3>{smallText}</h3>
              <Link href={`/product/${product}`}>
                <button>{buttonText}</button>
              </Link>
            {/* <p id='footer-banner-product-name'>{smallText}</p> */}

            <p>{desc}</p>
          </div>
        </div>
      </div>

  )
}

export default FooterBanner