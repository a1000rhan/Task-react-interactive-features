import React from "react";

function ProductDetail({ cookie }) {
  return (
    <div className="selected">
      <h1>{cookie.name}</h1>
      <img className="myimg" src={cookie.image} alt="" />
      <p>{cookie.discription}</p>
      <p>{cookie.price}</p>
    </div>
  );
}

export default ProductDetail;
