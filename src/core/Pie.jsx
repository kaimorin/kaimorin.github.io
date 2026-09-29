
function Pie() {
    const fecha = new Date();
    return(
        <footer className="pie">
            <p>Todos los derechos reservados © {fecha.getFullYear()}</p>
        </footer>
    )
}
export default Pie;