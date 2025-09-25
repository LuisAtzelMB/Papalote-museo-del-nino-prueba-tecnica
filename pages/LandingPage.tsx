import BrandingDesign from "@/app/components/BrandingDesign/BrandingDesign";
import Header from "@/app/components/Header/Header";
import React from "react";
import "../pages/LandingPage.css";
import Strategy from "@/app/components/Strategy/Strategy";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <div className="landingPage-container">
        <BrandingDesign />
      </div>
      <div className="strategy-container">
        <Strategy />
      </div>
    </div>
  );
}
