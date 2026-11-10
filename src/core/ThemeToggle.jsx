import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function temaActual() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function ThemeToggle() {
  const [tema, setTema] = useState(temaActual)
  const esOscuro = tema === 'dark'

  const alternar = () => {
    const siguiente = esOscuro ? 'light' : 'dark'
    document.documentElement.dataset.theme = siguiente
    try {
      localStorage.setItem('tema', siguiente)
    } catch {
      
    }
    setTema(siguiente)
  }

  return (
    <button type="button" className="theme-toggle" onClick={alternar}>
      {esOscuro ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
      <span>{esOscuro ? 'Modo claro' : 'Modo noche'}</span>
    </button>
  )
}

export default ThemeToggle
