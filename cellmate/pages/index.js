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
import { useStateContext } from "../context/StateContext";

const Home = ({ products, banners }) => {
  const showBestSellingPhones = () => {
    return products
      ?.filter((product) => product.stock > 0)
      .slice(0, 3)
      .map((product) => <Product key={product._id} product={product} />);
  };
  const otherPhones = () => {
    return products
      ?.filter((product) => product.stock > 0)
      .slice(3, 10)
      .map((product) => <Product key={product._id} product={product} />);
  };
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const array = [];
    for (let [key, value] of formData.entries()) {
      array.push(value)
    }
    setAdvSearchInput(array)
    console.log(array);
  };

  const { searchInput, 
    advSearchInput, setAdvSearchInput, 
    toggleAdvSearch,  setToggleAdvSearch, 
    advSearchName, setAdvSearchName, 
    advSearchBrand, setAdvSearchBrand,
    advSearchMaxPrice, setAdvSearchMaxPrice,
    advSearchMinPrice, setAdvSearchMinPrice
   } = useStateContext();

  // if (searchInput)
  //   return (
  //     <>
  
  //       <div className="products-heading">
  //         <h2>Searched Result</h2>
  //       </div>
  //       <div className="products-container">
  //         {products
  //           ?.filter((product) => product.name.match(searchInput))
  //           .map((product) => (
  //             <Product key={product._id} product={product} />
  //           ))}
  //       </div>
  //       <FooterBanner footerBanner={banners.length && banners[0]} />
  //     </>
  //   );

  if (toggleAdvSearch) {
    // setAdvSearchInput([])
    return (
      <>
        <div className="products-heading">
        <div className="footer-container">
          <h2>Search</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label> <input type="text" 
              name="name"  placeholder="name" value={advSearchName}
              onChange={(e)=> setAdvSearchName(e.target.value) } /> &emsp;
              
              <label>Brand:</label> <input type="text" 
              name="brand" placeholder="brand" value={advSearchBrand}
              onChange={(e)=> setAdvSearchBrand(e.target.value)} /> &emsp;

              <label>Min Price:</label> <input type="integer" 
              name="min-price" placeholder="price" value={advSearchMinPrice}
              onChange={(e)=> setAdvSearchMinPrice(e.target.value)} /> &emsp;

              <label>Max Price:</label> <input type="integer" 
              name="max-price" placeholder="price" value={advSearchMaxPrice}
              onChange={(e)=> setAdvSearchMaxPrice(e.target.value)} /> &emsp;
            </form>
        </div>
         { <h2>Result</h2>}
        </div>
        <div className="products-container">
          {products
               ?.filter((product) => product.name.match(advSearchName) 
               && product.brand.match(advSearchBrand) && product.price <= advSearchMaxPrice && product.price >= advSearchMinPrice)
            .map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
        <FooterBanner footerBanner={banners.length && banners[0]} />
      </>
    );}

  return (
    <>
      <HeaderBanner headerBanner={banners.length && banners[0]} />
      <div className="products-heading">
        <h2>Best Selling Mobiles</h2>
        <p>Showing the top rated Mobiles</p>
      </div>
      <div className="products-container">{showBestSellingPhones()}</div>
      <div className="products-heading">
        <h2>Other Mobiles</h2>
        <p>Maybe you prefer these...</p>
      </div>
      <div className="products-container">{otherPhones()}</div>
      <FooterBanner footerBanner={banners.length && banners[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  // console.log(products)

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
};

export default Home;
