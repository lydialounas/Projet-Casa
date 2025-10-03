// src/components/Banner.jsx
import React from "react";
import "./Banner.css";
import defaultBanner from "../../assets/Image.png";

export default function Banner({ image = defaultBanner, text }) {
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