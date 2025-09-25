import BrandingDesign from "@/app/components/BrandingDesign/BrandingDesign";
import Header from "@/app/components/Header/Header";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <div className="LandingPage/container">
        <BrandingDesign />
      </div>
    </div>
  );
}
