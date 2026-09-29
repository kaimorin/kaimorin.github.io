function Portafolio() {
    return(
        <section class="portafolio" id="portafolio">
            <h1>Sobre Mí</h1>
            <p>Habilidades, Proyectos y Logros.</p>
            <div className="contenedor">
                <div className="card-0">
                    <img className="img-1"src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="Logo de Python"/>
                    <p>Experiencia avanzada en python con distintas librerias como Matplotlib, Pandas y Numpy.</p>
                </div>
                <div className="card-0">
                    <img class= "img-2"src="https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png" alt="Logo de html"/>
                    <p>Experiencia en diseño de interfazes y paginas web con React y Bootstrap.</p>
                </div>
                <div className="card-0">
                    <img className="img-3"src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Logo de java"/>
                    <p>Exeriencia avanzada con java y la programacion orientada a objetos.</p>
                </div>
            </div>
   </section>  
    )
}

export default Portafolio;