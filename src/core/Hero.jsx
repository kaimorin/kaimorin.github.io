function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-nombre">
      <p className="hero-kicker">Ingeniero en Informática · Duoc UC</p>
      <h1 className="hero-name" id="hero-nombre">
        Kaimorin
      </h1>
      <p className="hero-title">
        Construyo software con foco en bases sólidas: programación orientada a objetos, bases de
        datos y desarrollo Full Stack. 
      </p>
      <div className="hero-acciones">
        <a className="btn" href="#portafolio">
          Ver habilidades
        </a>
        <a
          className="btn btn-ghost"
          href="https://github.com/kaimorin"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Hero
