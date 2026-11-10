import './App.css'
import Inicio from './core/Inicio.jsx'
import Navegacion from './core/Navegacion.jsx'
import Cv from './core/Cv.jsx'
import Portafolio from './core/Portafolio.jsx'
import Contact from './core/Contact.jsx'
import Repositorio from './core/Repositorio.jsx'
import Pie from './core/Pie.jsx'

function App() {
  return (
    <div className="app-contenedor">
      <header className="site-header">
        <h1><Inicio /></h1>
        <Navegacion />
      </header>
      <main>
        <Cv />
        <Portafolio />
        <Contact />
        <Repositorio />
      </main>
      <Pie />
    </div>
  )
}

export default App
