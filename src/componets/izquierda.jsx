import {store} from './contactos'
import Tipearmensaje from './tipearmensaje'
import Banersuperior from './banersuperior'
import Mensajes from './mensajes'
import './estilos.css'

export default function _(){
  return <div className='jeje'>
    <Nashe/>
  </div>  
}

function Nashe(){
  let estado = store.getState()
  let ultimovalor = estado.length

  if(ultimovalor){
    const {imagen,nombre} = estado[ultimovalor -1] 
    return <>
      <Banersuperior imagen={imagen} nombre={nombre}/>
      <div className=' bg-pink-900 w-full h-full overflow-auto'> 
        <Mensajes/> 
      </div>
      <Tipearmensaje/>
    </>
  }
  return <h1 className="text-cyan-200">manten tu telefono conectado</h1>
}