import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/util";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <AiOutlineQuestionCircle />
        </p>
        <h2>
          Forgot to add something to your cart? Shop around then come back to
          pay!
        </h2>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            OOgunremi@yahoo.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
