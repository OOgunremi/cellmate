import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import { Cart } from '.';
import { useStateContext } from '../context/StateContext';


const Navbar = () => {
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
    setAdvSearchMinPrice 
  } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className=''>
        <button className='logo' onClick={() => {setToggleAdvSearch(false),  setAdvSearchName(''), 
        setAdvSearchBrand(''),
        setAdvSearchMaxPrice(1000000),
        setAdvSearchMinPrice(0)}
        } ><Link href={'/'} >CellMate</Link></button>
      </p>
   
        {/* <label className='search-box'>
          <AiOutlineSearch />
          <input placeholder='Quick Search' type="text" name="name" onChange={(e)=> setSearchInput(e.target.value)} />
        </label> */}
        { toggleAdvSearch && <button className='advance-search' 
        onClick={() => { setToggleAdvSearch(true), setAdvSearchName(''), 
        setAdvSearchBrand(''),
        setAdvSearchMaxPrice(1000000),
        setAdvSearchMinPrice(0)}
        } ><Link href={'/'} >Search</Link></button>}

        { !toggleAdvSearch && <button className='advance-search' onClick={() => setToggleAdvSearch(true)} >Search</button>}
        
      <button type='button' className='cart-icon' onClick={() =>setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      { showCart && <Cart/>}
    </div>
  )
}

export default Navbar