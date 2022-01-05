// Components
import React, { useState } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import ProductDetail from "./ProductDetail";

const ProductList = ({ setCookie }) => {
  const [quary, setQuary] = useState("");
  //
  const ChangeCookie = (cookie) => {
    console.log(cookie);
  };
  //

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(quary.toLowerCase())
    )
    .map((product) => (
      <ProductItem product={product} key={product.id} setCookie={setCookie} />
    ));

  return (
    <>
      <SearchBar setQuary={setQuary} />
      <div className="listWrapper">{productList}</div>
    </>
  );
};

export default ProductList;
