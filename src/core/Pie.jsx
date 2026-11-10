function Pie() {
  const year = new Date().getFullYear()
  return (
    <footer className="pie">
      <p>© {year} Kai Morin</p>
    </footer>
  )
}

export default Pie
