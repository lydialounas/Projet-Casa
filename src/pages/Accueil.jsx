 
import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import "./Accueil.css";
import GalleryCards from "../components/GalleryCards/GalleryCards.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Accueil() {
  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" />
      <GalleryCards />
      <Footer />
    </>
  );
}
export default Accueil;
