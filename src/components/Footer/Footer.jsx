import React from "react";
import "./Footer.css";  
 import logo from "../../assets/logo_footer.png";  


 export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa Logo" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )};
