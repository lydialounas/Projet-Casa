// src/pages/Apropos.jsx
import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import "./Apropos.css";
 
import bannerApropos from "../assets/banner_2.png";

export default function Apropos() {
  return (
    <>
      <div className="apropos">
        {/* Bannière */}
        <Banner image={bannerApropos} Image={bannerApropos} />

        {/* Liste des collapses */}
        <div className="apropos_collapse">
          <Collapse
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées."
          />
          <Collapse
            title="Respect"
            content="Le respect fait partie des valeurs fondamentales de Kasa. Tout comportement discriminant ou irrespectueux envers nos hôtes ou voyageurs entraîne une exclusion immédiate de la plateforme."
          />
          <Collapse
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous offrir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Collapse
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Chaque logement est contrôlé régulièrement pour s’assurer qu’il correspond aux critères de sécurité établis par nos services."
          />
        </div>
      </div>

      {/* Footer toujours en bas */}
      <Footer />
    </>
  );
}
