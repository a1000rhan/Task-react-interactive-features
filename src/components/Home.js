import React, { useState } from "react";

const Home = () => {
  const [theam, setTheam] = useState("");
  return (
    <div className="home">
      <h1>Cookies and Beyond</h1>
      <h3>Where cookie maniacs gather</h3>
      <img
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
      <button className="btn-theam" onClick={() => setTheam}>
        change Theam
      </button>
      <img
        className="animate-img"
        alt=""
        src="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png"
      />
      <img
        className="animate2-img"
        alt=""
        src="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png"
      />
    </div>
  );
};

export default Home;
