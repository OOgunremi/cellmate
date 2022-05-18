import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { name, image, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={"auto"}
            height={300}
            object-fit={"contain"}
          />
          <div className="product-name">{name}</div>
          <div className="product-price">$ {price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
