import React from "react";
import products from "../products";

function ProductDetail({ cookie }) {
  return (
    <div className="selected">
      <h1>{cookie.name}</h1>
      <img className="myimg" src={cookie.image} />
      <p>{cookie.discription}</p>
      <p>{cookie.price}</p>
    </div>
  );
}

export default ProductDetail;
