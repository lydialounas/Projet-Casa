import { Link, useLocation } from "react-router-dom"
import React from "react";
import "./Header.css";  
 import logo from "../assets/logo.png"
export default function Header() {
  const location = useLocation()
  const activeLink = location.pathname

  return (
    <header className="header">
      <div>
        <img src={logo} alt="KASA logo" />
      </div>

      <nav className="header_nav">
        <Link to="/" className={`header_link ${activeLink === "/" ? "underline" : ""}`}>
          Accueil
        </Link>
        <Link to="/apropos" className={`header_link ${activeLink === "/apropos" ? "underline" : ""}`}>
           A Propos
        </Link>
      </nav>
    </header>
  )
}
