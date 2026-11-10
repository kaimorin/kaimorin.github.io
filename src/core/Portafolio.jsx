const skills = [
  {
    name: "Python",
    sub: "Automatización & Datos",
    desc: "Scripts, automatización y manipulación de datos. Prototipos rápidos y algoritmos eficientes.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python"
  },
  {
    name: "HTML / CSS",
    sub: "Frontend Web",
    desc: "Interfaces semánticas, accesibles y responsivas. Base sólida para frameworks modernos.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML5"
  },
  {
    name: "Java",
    sub: "Backend & POO",
    desc: "Herencia, polimorfismo y encapsulamiento aplicados a lógica de negocio y arquitectura robusta.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "Java"
  }
]

function Portafolio() {
  return (
    <section className="section" id="portafolio">
      <p className="section-label">Habilidades</p>
      <div className="skills-grid">
        {skills.map(s => (
          <div className="skill-item" key={s.name}>
            <img className="skill-icon" src={s.img} alt={s.alt} />
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portafolio
