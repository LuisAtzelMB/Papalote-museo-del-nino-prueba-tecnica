import React, { useState } from "react";
import Image from "next/image";
import "@/app/components/Header/Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-logo-div">
        <Image
          src={"./images/Logo.svg"}
          alt="Logo creative"
          width={134}
          height={60}
          className="header-logo-img"
        />
      </div>

      {/* Botón de Hamburguesa para móvil */}
      <button className="hamburger-btn" onClick={toggleMenu}>
        {isMenuOpen ? "x" : "☰"}
      </button>

      {/* Menú de navegación principal (Desktop) */}
      <div className="header-navbar-div">
        <button className="nav-btn normal-btn-header">About</button>
        <button className="nav-btn normal-btn-header">Service</button>
        <button className="nav-btn normal-btn-header">Projects</button>
        <button className="nav-btn btn-schedule-call">Schedule a Call</button>
      </div>

      {/* Menú modal para móvil */}
      <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-content">
          <button className="nav-btn normal-btn-header">About</button>
          <button className="nav-btn normal-btn-header">Service</button>
          <button className="nav-btn normal-btn-header">Projects</button>
          <button className="nav-btn btn-schedule-call">Schedule a Call</button>
        </div>
      </div>
    </header>
  );
}
