function Portafolio() {
    return(
        <section class="portafolio" id="portafolio">
            <h1>Sobre Mí</h1>
            <p>Información sobre mis habilidades, proyectos y logros.</p>
            <div className="contenedor">
                <div className="card-0">
                    <img className="img-1"src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="Logo de Python"/>
                    <p>Tarjeta numero 1 donde explico mi experiencia con Python</p>
                </div>
                <div className="card-0">
                    <img class= "img-2"src="https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png" alt="Logo de html"/>
                    <p>Tarjeta numero 2 donde explico mi experiencia con html</p>
                </div>
                <div className="card-0">
                    <img className="img-3"src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Logo de java"/>
                    <p>Tarjeta numero 3 donde explico mi experiencia con Java</p>
                </div>
            </div>
   </section>  
    )
}

export default Portafolio;