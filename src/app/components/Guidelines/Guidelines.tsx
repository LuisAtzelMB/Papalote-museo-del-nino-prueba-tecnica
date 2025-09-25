"use client";
import React, { useRef } from "react";
import Image from "next/image";
import "@/app/components/Guidelines/Guidelines.css";
import Carrusel from "./Carrusel/Carrusel";

interface CarruselRef {
  prev: () => void;
  next: () => void;
}

function Guidelines() {
  const carruselRef = useRef<CarruselRef>(null);

  // Modificamos las funciones para aceptar el evento de React y prevenir el comportamiento por defecto
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // <-- CLAVE: Previene el desplazamiento
    if (carruselRef.current) {
      carruselRef.current.prev();
    }
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // <-- CLAVE: Previene el desplazamiento
    if (carruselRef.current) {
      carruselRef.current.next();
    }
  };

  return (
    <div className="guidelines-main-container">
      <div className="carrusel-btns-text-container">
        <div className="carrusel-btns-relative-div">
          <Image
            src={"./images/~blanco.svg"}
            alt="Logo de la marca"
            width={134}
            height={60}
            className="logo-svg"
          />
          <h1 className="heading">
            Brand naming & <br /> guidelines
          </h1>
          <div className="carrusel-btns">
            {/* Aplicamos los handlers modificados */}
            <button onClick={handlePrev} className="carrusel-button">
              {/* Flecha Izquierda */}
              &lt;
            </button>
            <button onClick={handleNext} className="carrusel-button">
              {/* Flecha Derecha */}
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="carrusel-div">
        <Carrusel ref={carruselRef} />
      </div>
    </div>
  );
}

export default Guidelines;
