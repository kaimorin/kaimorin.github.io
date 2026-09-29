import ContactForm from "./ContactForm";
function Contact() {
    return (
        <section className="contacto" id="contacto">
            <h1 className="titulo-contacto">Contacto</h1>
            <p className="texto">¡No dudes en ponerte en contacto conmigo!</p>
            <ContactForm/>
        </section>
    )
}

export default Contact;