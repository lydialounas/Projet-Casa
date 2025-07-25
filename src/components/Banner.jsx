
import React from "react";
import "../components/Banner.css";


export default function Banner({ image, text }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      {text && (
        <div className="banner-text">
          <h1>{text}</h1>
        </div>
      )}
    </div>
  );
}
import "../components/Banner.css";