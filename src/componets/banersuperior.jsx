import Fotodeperfil from './fotoperfil'
import './estilos.css'
export default function _({imagen,nombre}){
  return <div className='nombreunico'>
    <div className='flex justify-center items-center'>
      <Fotodeperfil imagen={imagen}/>
    </div>
    <div className=''>
      <h1>{nombre}</h1>
      <h2>ahaha manasdofhndofbaf dfds f</h2>
    </div>
    <div className=' right-4'>
      <p>sadhasdj</p>
      <p>sadhasdj</p>
    </div>
  </div>
}