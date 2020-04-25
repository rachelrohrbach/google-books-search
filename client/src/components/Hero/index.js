import React from "react";
import "./style.css";

function Hero() {
    return (
        <div
      className="hero text-center"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
      }}
    >
      <h1>(React) Google Books Search</h1>
      <h3>Search for and save books of interest</h3>
    </div>
  );
}

export default Hero;