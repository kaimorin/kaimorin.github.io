import { useForm, ValidationError } from "@formspree/react"

const FORMSPREE_ID = "mgavdzgp"

function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  if (state.succeeded) {
    return <p className="success-msg">Mensaje enviado. Te responderé pronto.</p>
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="tu@correo.com"
        />
        <ValidationError className="form-error" prefix="Correo" field="email" errors={state.errors} />
      </div>

      <div className="form-field">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Escribe tu mensaje…"
          rows="5"
        />
        <ValidationError className="form-error" prefix="Mensaje" field="message" errors={state.errors} />
      </div>

      <ValidationError className="form-error" errors={state.errors} />

      <button className="btn-enviar" type="submit" disabled={state.submitting}>
        {state.submitting ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  )
}

export default ContactForm