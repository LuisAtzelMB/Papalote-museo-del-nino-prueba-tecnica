"use client";
import React, { useState } from "react";
import "./index.css"; // Importación corregida a ruta relativa

// Definición de tipos para los datos del formulario
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Definición de tipos para los errores de validación
interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Paleta de colores vibrantes para un toque "Papalote"
  const colorPalette = {
    primary: "#007BFF", // Azul brillante
    secondary: "#FFC300", // Amarillo vibrante
    tertiary: "#FF5733", // Naranja rojizo
    success: "#28A745",
  };

  // Validación básica del formulario
  const validate = (): Errors => {
    const newErrors: Errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Introduce un correo electrónico válido.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es obligatorio.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Limpiar el error cuando el usuario comienza a escribir
    if (errors[name as keyof Errors]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage("");
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulación de envío de datos (reemplazar con lógica de API real)
      setTimeout(() => {
        console.log("Formulario enviado:", formData);
        setIsSubmitting(false);
        setSubmitMessage(
          "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1500);
    } else {
      setSubmitMessage("Por favor, revisa los campos con errores.");
    }
  };

  return (
    <div className="form-page-container">
      <div className="papalote-intro-card">
        <h2 className="papalote-title" style={{ color: colorPalette.primary }}>
          ¡Conéctate con Nosotros!
        </h2>
        <p
          className="papalote-subtitle"
          style={{ color: colorPalette.tertiary }}
        >
          Llena el formulario para iniciar tu próximo gran proyecto.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="corporate-form-container">
        {submitMessage && (
          <div
            className={`submit-message ${
              Object.keys(errors).length === 0 ? "success" : "error"
            }`}
            style={{
              backgroundColor:
                Object.keys(errors).length === 0
                  ? colorPalette.success
                  : colorPalette.tertiary,
            }}
          >
            {submitMessage}
          </div>
        )}

        {/* Campo Nombre Completo */}
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre o el de tu empresa"
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        {/* Campo Correo Electrónico */}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@corporativo.com"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        {/* Campo Asunto */}
        <div className="form-group">
          <label htmlFor="subject">Asunto del Mensaje</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Escribe un título breve"
            className={errors.subject ? "input-error" : ""}
          />
          {errors.subject && <p className="error-text">{errors.subject}</p>}
        </div>

        {/* Campo Mensaje */}
        <div className="form-group full-width">
          <label htmlFor="message">Tu Mensaje o Requerimiento</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe tu proyecto, dudas o comentarios clave."
            className={errors.message ? "input-error" : ""}
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="submit-button"
          style={{
            backgroundColor: isSubmitting
              ? colorPalette.secondary
              : colorPalette.primary,
            transform: isSubmitting ? "scale(0.98)" : "scale(1)",
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </div>
  );
}
