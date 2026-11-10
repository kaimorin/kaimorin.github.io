import ContactForm from "./ContactForm"

function Contact() {
  return (
    <section className="section" id="contacto">
      <p className="section-label">Contacto</p>
      <h2 className="section-title">Hablemos</h2>
      <p className="contact-intro">¿Tienes un proyecto en mente o quieres ponerte en contacto? Escríbeme.</p>
      <ContactForm />
    </section>
  )
}

export default Contact
