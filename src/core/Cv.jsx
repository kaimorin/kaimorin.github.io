import Photo from "./Photo";

function Cv() {
  return ( 
    <section className="cv" id="cv">
      <h1 className="cv-title">Curriculum Vitae</h1>
      
      <div className="cv-contenido">
        <Photo />
        <p className="cv-description">
          Estudiante de 2.° año de Ingeniería en Informática en Duoc UC enfocado en el desarrollo de soluciones de software eficientes y escalables. Con sólida base técnica en programación orientada a objetos, bases de datos relacionales y tecnologías Full Stack. Apasionado por la resolución de problemas complejos mediante código limpio y metodologías ágiles, preparándome para mi próxima certificación como Analista Programador.
        </p>

      </div>
    </section>
  )
}

export default Cv;