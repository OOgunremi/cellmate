import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from '.';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, searchInput, setSearchInput, totalQuantities, setIsSearchedItem } = useStateContext()
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href={'/'}>CellMate</Link>
      </p>
      <form className='banner-hero-form'>
        <label>
          Search: 
          <input type="text" name="name" />
        </label>
        <button type="submit" value="Submit" onClick={(e)=> setIsSearchedItem(true), setSearchInput(e.target.value)}>click</button>
      </form>
      <button type='button' className='cart-icon' onClick={() =>setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      { showCart && <Cart/>}
    </div>
  )
}

export default Navbar