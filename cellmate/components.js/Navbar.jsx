import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from ".";
import { useStateContext } from "../context/StateContext";
import { useUser } from "@auth0/nextjs-auth0";

const Navbar = () => {
  const { user } = useUser();
  const {
    showCart,
    setShowCart,
    setSearchInput,
    toggleAdvSearch,
    setToggleAdvSearch,
    totalQuantities,
    setAdvSearchName,
    setAdvSearchBrand,
    setAdvSearchMaxPrice,
    setAdvSearchMinPrice,
  } = useStateContext();

  const userInfo = () => {
    if (user) {
      return (
        <div>
          <h4>Hello, {user.given_name}!</h4>
          <a href="/api/auth/logout">Logout?</a>
        </div>
      );
    }
    return (
      <p className="logo">
        <a href="/api/auth/login">Login</a>
      </p>
    );
  };

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>CellMate</Link>
      </p>

      <label className="search-box">
        <input
          placeholder="Quick Search"
          type="text"
          name="name"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </label>
      {toggleAdvSearch && (
        <button
          className="advance-search"
          onClick={() => {
            setToggleAdvSearch(false),
              setAdvSearchName(""),
              setAdvSearchBrand(""),
              setAdvSearchMaxPrice(1000000),
              setAdvSearchMinPrice(0);
          }}
        >
          Return
        </button>
      )}

      {!toggleAdvSearch && (
        <button
          className="advance-search"
          onClick={() => setToggleAdvSearch(true)}
        >
          Advance Search
        </button>
      )}

      {userInfo()}

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
