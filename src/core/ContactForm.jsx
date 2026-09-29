import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  // Reemplaza "tu-form-id" con el ID real que te da Formspree al crear tu formulario
  const [state, handleSubmit] = useForm("tu-form-id");

  if (state.succeeded) {
    return <p className="text-green-600">¡Gracias por tu mensaje! Nos pondremos en contacto pronto.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Campo de Correo Electrónico */}
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-medium">
          Correo Electrónico:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="tucorreo@ejemplo.com"
          className="border p-2 rounded"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Campo de Mensaje */}
      <div className="input-email">
        <label htmlFor="message" className="mb-1 text-sm font-medium">
          Mensaje:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí..."
          className="border p-2 rounded"
          rows="4"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Botón de Enviar (button) */}
      <button
      className="btn-enviar"
        type="submit" 
        disabled={state.submitting}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        {state.submitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

export default ContactForm;