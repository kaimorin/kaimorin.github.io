import Photo from "./Photo"

function Cv() {
  return (
    <section className="section" id="cv">
      <p className="section-label">Perfil</p>
      <div className="cv-grid">
        <Photo />
        <div className="cv-text">
          <h2>Kai Morin</h2>
          <p>
            Estudiante de 2.° año de Ingeniería en Informática en Duoc UC.
            Enfocado en el desarrollo de soluciones de software eficientes y
            escalables, con base en programación orientada a objetos, bases de
            datos relacionales y tecnologías Full Stack. Preparándome para la
            certificación de Analista Programador.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cv
