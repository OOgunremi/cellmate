import React from "react";
import {
  Cart,
  Product,
  Layout,
  Navbar,
  Footer,
  FooterBanner,
  HeaderBanner,
} from "../components.js";
import { client } from "../lib/client.js";

const Home = ({ products, banners }) => {
  const showBestSellingPhones = () => {
    return products
      ?.filter((product) => product.stock > 0)
      .slice(0, 3)
      .map((product) => <Product key={product._id} product={product} />);
  };

  return (
    <>
      <HeaderBanner headerBanner={banners.length && banners[0]} />
      <div className="products-heading">
        <h2>Best Selling Mobiles</h2>
        <p>Showing the top rated Mobiles</p>
      </div>
      <div className="products-container">{showBestSellingPhones()}</div>
      <FooterBanner footerBanner={banners.length && banners[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
};

export default Home;
