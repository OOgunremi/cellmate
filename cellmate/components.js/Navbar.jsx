import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from '.';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, searchInput, setSearchInput, totalQuantities } = useStateContext()
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href={'/'}>CellMate</Link>
      </p>
   
        <label>
          Search: <input type="text" name="name" onChange={(e)=> setSearchInput(e.target.value)} />
        </label>
      <button type='button' className='cart-icon' onClick={() =>setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      { showCart && <Cart/>}
    </div>
  )
}

export default Navbar