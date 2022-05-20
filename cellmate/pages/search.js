import React from "react";
import Link from "next/link";
import { useStateContext } from '../context/StateContext';

export default function advSearch() {
  const { setAdvSearchInput } = useStateContext();

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

  return (
    <div className="footer-container">
      <h2>Advance Search</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label> <input type="text" name="name" placeholder="name"/> &emsp;
        <label>Brand:</label> <input type="text" name="model" placeholder="brand"/> &emsp;
        <label>Price:</label> <input type="integer" name="year" placeholder="price"/> &emsp;
        <button type="submit"> Search </button>
      </form>
    </div>
  );
}