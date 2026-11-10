import React from "react"
import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
  const [state, handleSubmit] = useForm("tu-form-id")

  if (state.succeeded) {
    return <p className="success-msg">Mensaje enviado. Te responderé pronto.</p>
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <div className="form-field">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="tu@correo.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-field">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje…"
          rows="5"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button className="btn-enviar" type="submit" disabled={state.submitting}>
        {state.submitting ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  )
}

export default ContactForm
