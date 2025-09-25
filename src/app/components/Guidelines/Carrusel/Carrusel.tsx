"use client";
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  ForwardedRef,
} from "react";
import Image from "next/image";
// Importación del CSS separado para los estilos del carrusel
import "./Carrusel.css";

// 1. Definir la interfaz para los datos de cada proyecto
interface Project {
  src: string;
  alt: string;
  text: string;
  year: string;
}

// 2. Definir la interfaz para los métodos que se exponen al padre (Guidelines)
// Esta era la interfaz que causaba el error de exportación/importación.
interface CarruselRef {
  prev: () => void;
  next: () => void;
}

// Datos de los proyectos (tipado con Project[])
const projects: Project[] = [
  {
    src: "/images/project1.jpg",
    alt: "Lean Product Roadmap Image",
    text: "Lean Product Roadmap",
    year: "2019 Project",
  },
  {
    src: "/images/project1.jpg",
    alt: "Brand Identity Creation Image",
    text: "Brand Identity Creation",
    year: "2020 Project",
  },
  {
    src: "/images/project1.jpg",
    alt: "Website Redesign Image",
    text: "Website Redesign",
    year: "2021 Project",
  },
];

// Usamos forwardRef para permitir que el componente Guidelines pueda manipular el estado interno.
const Carrusel = forwardRef((props, ref: ForwardedRef<CarruselRef>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsCount = projects.length;

  // Lógica de navegación centralizada para avanzar/retroceder
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsCount - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsCount - 1 ? 0 : prevIndex + 1
    );
  };

  // Exponer las funciones de navegación al componente padre (Guidelines) a través de la ref
  useImperativeHandle(ref, () => ({
    prev: prevSlide,
    next: nextSlide,
  }));

  // Autoplay functionality: Este es el código que se ajustó para evitar el scroll.
  // Utiliza la forma funcional de setState para no depender de currentIndex en el array de dependencias.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projectsCount - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia cada 5 segundos

    // Función de limpieza
    return () => clearInterval(interval);
  }, [projectsCount]);

  return (
    <div className="carrusel-track-wrapper">
      <div
        className="carrusel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div key={index} className="carrusel-item">
            {/* Componente Image con dimensiones optimizadas */}
            <Image
              src={project.src}
              alt={project.alt}
              width={700} // Dimensiones optimizadas para un carrusel grande
              height={700}
              className="carrusel-image"
            />
            <div className="project-info">
              <p className="project-text">{project.text}</p>
              <p className="project-year">{project.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Carrusel.displayName = "Carrusel";

export default Carrusel;
