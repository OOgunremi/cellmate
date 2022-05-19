import React from "react";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="footer-container">
      <h1>404 - Page Not Found</h1>
      <h2>Checkout our awesome phones on our homepage!</h2>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
}
