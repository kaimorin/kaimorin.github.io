import foto_1  from '../assets/perfil-pic.png'
const FOTO = foto_1

function Photo() {
  if (FOTO) {
    return <img className="foto-perfil" src={FOTO} alt="Foto de Kaimorin" />
  }

  return (
    <div className="foto-perfil foto-monograma" role="img" aria-label="Iniciales de Kaimorin">
      KM
    </div>
  )
}

export default Photo
