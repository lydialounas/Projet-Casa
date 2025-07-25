 import React, { useState, useEffect } from 'react';
import './GalleryCards.css'; // si tu as un style
import { Link } from 'react-router-dom';

function GalleryCards() {
  const [properties, setProperties] = useState([]); // ← données vides au début

  useEffect(() => {
    // Appel API à l'initialisation
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error("Erreur lors du chargement des données :", error));
  }, []); // [] = exécuter une seule fois au chargement
console.log("✅ GalleryCards monté !");
console.log("📦 Données properties :", properties);

  return (
    <div className="gallery-container">
      {properties.map((property) => (
        <Link className="card" key={property.id}to={`/location/${property.id}`}>
          <img
            src={property.cover} // ← construction de l'URL dynamique
            alt={property.title}
            className="card-image"
          />
          <h3>{property.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default GalleryCards;
