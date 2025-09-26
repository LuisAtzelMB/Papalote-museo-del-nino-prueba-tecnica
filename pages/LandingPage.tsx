import BrandingDesign from "@/app/components/BrandingDesign/BrandingDesign";
import Header from "@/app/components/Header/Header";
import React, { useRef } from "react";
import "../pages/LandingPage.css";
import Strategy from "@/app/components/Strategy/Strategy";
import Guidelines from "@/app/components/Guidelines/Guidelines";
import ContactSection from "@/app/components/ContactSection/ContactSection";

// Define la interfaz fuera del componente para mejor organización
interface SectionRefs {
  about: React.RefObject<HTMLDivElement | null>;
  service: React.RefObject<HTMLDivElement | null>;
  projects: React.RefObject<HTMLDivElement | null>;
}

export default function LandingPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Crea el objeto sectionRefs con las referencias
  const sectionRefs: SectionRefs = {
    about: aboutRef,
    service: serviceRef,
    projects: projectsRef,
  };

  return (
    <div>
      <Header sectionRefs={sectionRefs} />
      <div className="landingPage-container" ref={aboutRef}>
        <BrandingDesign />
      </div>
      <div className="strategy-container" ref={serviceRef}>
        <Strategy />
      </div>
      <div className="guidelines-container" ref={projectsRef}>
        <Guidelines />
      </div>
      <div className="landingPage-contact-section">
        <ContactSection />
      </div>
    </div>
  );
}
