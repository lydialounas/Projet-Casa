 
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Error.css";

export default function Error() {
  return (
    <>
      <main className="error">
        <h1 className="error__code">404</h1>
        <p className="error__msg">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error__link">
          Retourner sur la page d’accueil
        </Link>
      </main>
      <Footer />
    </>
  );
}
