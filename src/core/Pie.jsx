function Pie() {
  const year = new Date().getFullYear()
  return (
    <footer className="pie">
      <div className="contenedor pie-inner">
        <p>© {year} Kaimorin</p>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  )
}

export default Pie
