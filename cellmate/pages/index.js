import React from 'react';
import { Cart, Product, Layout, Navbar, Footer, FooterBanner, HeaderBanner } from '../components.js';
import { client } from '../lib/client.js'; 
import { useStateContext } from '../context/StateContext';

const Home = ({products, banners}) => {


  const { searchInput, setSearchInput, } = useStateContext()
  
  if (searchInput) return  (  
  <>
    <HeaderBanner headerBanner={banners.length && banners[0]}/>
      <div  className='products-heading'>
        <h2>Searched Mobiles</h2>

      </div>
      <div className='products-container'>
        {products?.filter(product => product.name.includes(searchInput))
        .map((product) => <Product key={product._id} product={product} />)}
      </div>
    <FooterBanner footerBanner={banners.length && banners[0]}/>
  </>)
  
  
  return (
  <>
  <HeaderBanner headerBanner={banners.length && banners[0]}/>
    <div  className='products-heading'>
      <h2>Best Selling Mobiles</h2>
      <p>Showing the top rated Mobiles</p>
    </div>
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
  <FooterBanner footerBanner={banners.length && banners[0]}/>
  </>
)};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners }
  }
}

export default Home