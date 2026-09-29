import Photo from "./Photo";

function Cv() {
  return ( 
    <section className="cv" id="cv">
      <h1 className="cv-title">Curriculum Vitae</h1>
      
      <div className="cv-contenido">
        <Photo />
        <p className="cv-description">Detalles de mi experiencia profesional y educación.</p>
      </div>
    </section>
  )
}

export default Cv;