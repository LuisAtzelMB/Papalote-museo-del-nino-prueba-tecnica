"use client";
import React, { useState } from "react";
import Image from "next/image";
import "@/app/components/Header/Header.css";

interface SectionRefs {
  about: React.RefObject<HTMLDivElement | null>;
  service: React.RefObject<HTMLDivElement | null>;
  projects: React.RefObject<HTMLDivElement | null>;
}

interface HeaderProps {
  sectionRefs: SectionRefs;
}

export default function Header({ sectionRefs }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionName: keyof SectionRefs) => {
    const ref = sectionRefs[sectionName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const scheduleCall = () => {
    window.location.href = "/landingPage/Form";
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

      <button className="hamburger-btn" onClick={toggleMenu}>
        {isMenuOpen ? "x" : "☰"}
      </button>

      <div className="header-navbar-div">
        <button
          className="nav-btn normal-btn-header"
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className="nav-btn normal-btn-header"
          onClick={() => scrollToSection("service")}
        >
          Service
        </button>
        <button
          className="nav-btn normal-btn-header"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button className="nav-btn btn-schedule-call" onClick={scheduleCall}>
          Schedule a Call
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-content">
          <button
            className="nav-btn normal-btn-header"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="nav-btn normal-btn-header"
            onClick={() => scrollToSection("service")}
          >
            Service
          </button>
          <button
            className="nav-btn normal-btn-header"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button className="nav-btn btn-schedule-call" onClick={scheduleCall}>
            Schedule a Call
          </button>
        </div>
      </div>
    </header>
  );
}
