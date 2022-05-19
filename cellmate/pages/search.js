import React from "react";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="footer-container">
      <h2>Advance Search</h2>


      <form>
        <label>Name:</label> <input type="text" name="name" /> &emsp;
        <label>Year:</label> <input type="text" name="year" /> &emsp;
        <label>Brand:</label> <input type="text" name="model" /> &emsp;
        <label>Color:</label> <input type="text" name="blue" /> &emsp;

        
        <input type="submit" value="Search" />
      </form>

    </div>
  );
}
