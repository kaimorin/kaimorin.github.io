import './App.css'
import Saludar from './core/Saludar.jsx'
import Pie from './core/Pie.jsx'
import Inicio from './core/Inicio.jsx'
import Navegacion from './core/Navegacion.jsx'
import Cv from './core/Cv.jsx'
import Portafolio from './core/Portafolio.jsx'

function App() {

  return (
      <>
        <body>
        <header>
          <h1><Inicio /></h1>
          <section><Navegacion /></section>
          <Saludar />
        </header> 
         <Cv />
          <Portafolio />

         
          <Pie />
        </body>
      </>
        
        
  )
}

export default App
