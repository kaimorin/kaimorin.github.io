import './App.css'
import Inicio from './core/Inicio.jsx'
import Navegacion from './core/Navegacion.jsx'
import ThemeToggle from './core/ThemeToggle.jsx'
import Hero from './core/Hero.jsx'
import Cv from './core/Cv.jsx'
import Portafolio from './core/Portafolio.jsx'
import Contact from './core/Contact.jsx'
import Repositorio from './core/Repositorio.jsx'
import Pie from './core/Pie.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <div className="contenedor header-inner">
          <a className="brand" href="#inicio"><Inicio /></a>
          <div className="header-right">
            <Navegacion />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main id="contenido" className="contenedor">
        <Hero />
        <Cv />
        <Portafolio />
        <Contact />
        <Repositorio />
      </main>
      <Pie />
    </>
  )
}

export default App
