function Portafolio() {
    return(
        <section class="portafolio" id="portafolio">
            <h1>Sobre Mí</h1>
            <p>Habilidades, Proyectos y Logros.</p>
            <div className="card-contenedor">
                <div className="card-0">
                    <img className="img-1"src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="Logo de Python"/>
                    <p>Automatización, Lógica y Análisis de Datos
                        Uso de Python para el desarrollo ágil de scripts, automatización de tareas y manipulación de datos. Habilidad para aprovechar su sintaxis limpia en la creación de prototipos rápidos, algoritmos eficientes y soluciones backend versátiles que optimizan flujos de trabajo.
                    </p>
                </div>
                <div className="card-0">
                    <img class= "img-2"src="https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png" alt="Logo de html"/>
                    <p>Estructuración Web y Maquetación Frontend
                        Creación de interfaces web semánticas, accesibles y optimizadas utilizando HTML5. Enfoque en la estructuración sólida de datos para el navegador, asegurando la base ideal para un diseño responsivo y la posterior integración con hojas de estilo y frameworks modernos.</p>
                </div>
                <div className="card-0">
                    <img className="img-3"src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Logo de java"/>
                    <p>Desarrollo Backend y Programación Orientada a Objetos
                        Dominio de los pilares de Java (herencia, polimorfismo y encapsulamiento) aplicados a la lógica de negocio y arquitectura de software. Capacidad para diseñar sistemas robustos, estructurar código limpio y resolver algoritmos complejos estructurados bajo patrones de diseño modernos.
                    </p>
                </div>
            </div>
   </section>  
    )
}

export default Portafolio;