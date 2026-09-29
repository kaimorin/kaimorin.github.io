import './App.css'
import Pie from './core/Pie.jsx'
import Inicio from './core/Inicio.jsx'
import Navegacion from './core/Navegacion.jsx'
import Cv from './core/Cv.jsx'
import Portafolio from './core/Portafolio.jsx'
import Contact from './core/Contact.jsx'
import Repositorio from './core/Repositorio.jsx'
import Division from './core/Division.jsx'

function App() {
  return (
      <main className="app-contenedor">
        <header>
          <h1><Inicio /></h1>
          <section className="nav"><Navegacion /></section>
        </header>
        <Cv />
        <Portafolio />
        <Division />
        <Contact />
        <Division />
        <Repositorio />
         
        <Pie />
      </main>
  )
}

export default App