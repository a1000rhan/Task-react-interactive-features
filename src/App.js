import React, { useState } from "react";
import Home from "./components/Home";
// Components

import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
//styling
import "./App.css";
import products from "./products";

function App() {
  const theam = {
    dark: {
      color: "white",
      backgroundColor: "black",
    },
    light: {
      color: "black",
      backgroundColor: "wheat",
    },
  };
  const [currenttheam, setCurrenttheam] = useState("light");

  const [cookie, setCookie] = useState(products[1]);
  //const cookie = products[1];
  return (
    <div style={theam[currenttheam]}>
      <div className="home">
        <button
          className="btn-theam"
          onClick={() =>
            setCurrenttheam(currenttheam === "light" ? "dark" : "light")
          }
        >
          change Theam
        </button>
      </div>
      <Home />
      <ProductList setCookie={setCookie} />
      <ProductDetail cookie={cookie} />
    </div>
  );
}

export default App;
