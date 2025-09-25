"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/app/components/Guidelines/Guidelines.css";

// Importa las imágenes directamente
import project1 from "@/../public/images/project1project1.jpg";
import project2 from "@/../public/images/project1project1.jpg";
import project3 from "@/../public/images/project1project1.jpg";

const projects = [
  {
    src: project1,
    alt: "Imagen de proyecto 1",
    text: "Lean Product Roadmap",
    year: "2019 Project",
  },
  {
    src: project2,
    alt: "Imagen de proyecto 2",
    text: "Brand Identity Creation",
    year: "2020 Project",
  },
  {
    src: project3,
    alt: "Imagen de proyecto 3",
    text: "Website Redesign",
    year: "2021 Project",
  },
];

function Guidelines() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="guidelines-container">
      <div className="top-section">
        <div className="left-content">
          <div className="text-buttons-container">
            <h1 className="heading">
              Brand naming & <br /> guidelines
            </h1>
            <div className="buttons-container">
              <button onClick={prevSlide} className="carousel-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button onClick={nextSlide} className="carousel-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="right-content">
          <div className="image-carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="carousel-item">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={700}
                    height={700}
                    className="carousel-image"
                  />
                  <div className="project-info">
                    <p className="project-text">{project.text}</p>
                    <p className="project-year">{project.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <h2 className="bottom-text">Let's build something great together.</h2>
        <a href="#" className="schedule-button">
          Schedule a Call
        </a>
      </div>
    </div>
  );
}

export default Guidelines;
