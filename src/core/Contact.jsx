function Contact() {
    return (
        <section className="contacto" id="contacto">
            <h1 className="titulo-contacto">Contacto</h1>
            <p className="texto">¡No dudes en ponerte en contacto conmigo!</p>
            <input className="input-email" type="email" placeholder="Correo electrónico"/>
            <button className="btn-enviar">Enviar</button>
        </section>
    )
}

export default Contact;