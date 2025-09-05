 
import React from "react";
import Banner from "../components/Banner";
import "./Accueil.css";
import GalleryCards from "../components/GalleryCards";
import Footer from "../components/Footer";

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
