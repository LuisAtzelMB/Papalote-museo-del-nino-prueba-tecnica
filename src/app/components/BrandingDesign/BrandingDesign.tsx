import React from "react";
import Image from "next/image";
import "@/app/components/BrandingDesign/BrandingDesign.css";

export default function BrandingDesign() {
  return (
    <div className="branding-container">
      {/* Contenedor de la imagen */}
      <div className="branding-image-div">
        <Image
          src={"/images/workingPeople.png"}
          alt="Gente trabajando en la marca"
          width={895}
          height={800}
          className="branding-image"
        />
      </div>
      {/* Contenedor del texto con el fondo degradado */}
      <div className="branding-text">
        <h1 className="branding-title">Branding & website design agency</h1>
        <p className="branding-description">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button className="branding-button">Learn More</button>
      </div>
    </div>
  );
}
