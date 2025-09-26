"use client";
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  ForwardedRef,
} from "react";
import Image from "next/image";
import "./Carrusel.css";

interface Project {
  src: string;
  alt: string;
  text: string;
  year: string;
}

interface CarruselRef {
  prev: () => void;
  next: () => void;
}

const projects: Project[] = [
  {
    src: "/images/project1.jpg",
    alt: "Lean Product Roadmap Image",
    text: "Lean Product Roadmap",
    year: "2019 Project",
  },
  {
    src: "/images/project2.jpg",
    alt: "Brand Identity Creation Image",
    text: "GYMEffective",
    year: "2025 created entirely by myself",
  },
  {
    src: "/images/project3.jpg",
    alt: "Website Redesign Image",
    text: "websites specially made for you",
    year: "2024 Software created for Begomx, powered by a real API.",
  },
  {
    src: "/images/project4.jpg",
    alt: "New Majestic Hotel",
    text: "New Majestic Hotel",
    year: "2018 Project",
  },
  {
    src: "/images/project5.jpg",
    alt: "Crypto Dashboard",
    text: "Crypto Dashboard",
    year: "2016 Project",
  },
];

const Carrusel = forwardRef((props, ref: ForwardedRef<CarruselRef>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsCount = projects.length;

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

  useImperativeHandle(ref, () => ({
    prev: prevSlide,
    next: nextSlide,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projectsCount - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [projectsCount]);

  return (
    <div className="carrusel-track-wrapper">
      <div
        className="carrusel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => {
          const isTallImage =
            project.src === "/images/project2.jpg" ||
            project.src === "/images/project3.jpg";

          return (
            <div key={index} className="carrusel-item">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className={`carrusel-image ${
                  isTallImage ? "carrusel-image-tall" : ""
                }`}
              />
              <div className="project-info">
                <p className="project-text">{project.text}</p>
                <p className="project-year">{project.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

Carrusel.displayName = "Carrusel";

export default Carrusel;
