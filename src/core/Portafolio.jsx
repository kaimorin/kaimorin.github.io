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

const aptitudes = [
  {
    grupo: "Desarrollo de software",
    items: [
      "Fundamentos de programación",
      "Programación orientada a objetos",
      "Desarrollo Full Stack",
      "Aplicaciones móviles",
      "Cloud computing"
    ]
  },
  {
    grupo: "Datos y análisis",
    items: [
      "Bases de datos aplicadas",
      "Matemática aplicada",
      "Estadística descriptiva"
    ]
  },
  {
    grupo: "Ingeniería",
    items: [
      "Ingeniería de requisitos",
      "Ingeniería de software",
      "Innovación"
    ]
  },
  {
    grupo: "Transversales",
    items: [
      "Inglés intermedio",
      "Habilidades de comunicación",
      "Ética para el trabajo"
    ]
  },
  {
    grupo: "Formación complementaria",
    items: [
      "Ciberseguridad defensiva",
      "DevOps",
      "Metodologías ágiles"
    ]
  }
]

const diseno = [
  {
    nombre: "Diseño de interfaces",
    desc: "Diseño de maquetas de interfaces para aplicaciones y sitios web, creadas en Moqups.",
    links: [
      {
        label: "Diseño App Movil",
        href: "https://app.moqups.com/A6wZxMWPhxHSRJCPoP8Ld0qznmOrq8QV/view/page/a7bc758b4"
      },
      {
        label: "Diseño Web",
        href: "https://app.moqups.com/Lxee7ENQSVL12xqkzrG8U5hFhf5wTkxd/view/page/a57f5c842"
      }
    ]
  }
]

function Portafolio() {
  return (
    <section className="section" id="portafolio">
      <p className="section-label">Habilidades</p>
      <h2 className="section-title">Habilidades y experiencia</h2>

      <div className="bloque">
        <h3 className="bloque-titulo">Lenguajes y tecnologías</h3>
        <div className="skills-grid">
          {skills.map(s => (
            <div className="skill-item" key={s.name}>
              <img className="skill-icon" src={s.img} alt={s.alt} />
              <h4>{s.name}</h4>
              <p className="skill-sub">{s.sub}</p>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bloque">
        <h3 className="bloque-titulo">Aptitudes</h3>
        <div className="aptitudes">
          {aptitudes.map(g => (
            <div className="aptitud-grupo" key={g.grupo}>
              <h4>{g.grupo}</h4>
              <ul className="chips">
                {g.items.map(item => (
                  <li className="chip" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bloque">
        <h3 className="bloque-titulo">Experiencia</h3>
        <div className="skills-grid">
          {diseno.map(e => (
            <div className="skill-item" key={e.nombre}>
              <h4>{e.nombre}</h4>
              <p className="skill-sub">UX/UI - Web</p>
              <p>{e.desc}</p>
              {e.links && (
                <div className="skill-links">
                  {e.links.map(l => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portafolio