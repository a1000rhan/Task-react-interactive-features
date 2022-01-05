import Home from "./components/Home";
// Components

import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import React, { useState } from "react";
//styling
import "./App.css";
import products from "./products";

function App() {
  const [cookie, setCookie] = useState(products[1]);
  //const cookie = products[1];
  return (
    <div>
      <Home />
      <ProductList setCookie={setCookie} />
      <ProductDetail cookie={cookie} />
    </div>
  );
}

export default App;
