import './App.css'
import Pie from './core/Pie.jsx'
import Inicio from './core/Inicio.jsx'
import Navegacion from './core/Navegacion.jsx'
import Cv from './core/Cv.jsx'
import Portafolio from './core/Portafolio.jsx'
import Contact from './core/Contact.jsx'
import Repositorio from './core/Repositorio.jsx'

function App() {

  return (
      <>
        <body>
        <header>
          <h1><Inicio /></h1>
          <section><Navegacion /></section>
          
        </header> 
         <Cv />
          <Portafolio />
          <Contact />
          <Repositorio />
         
          <Pie />
        </body>
      </>
        
        
  )
}

export default App
