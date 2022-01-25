import {store} from './contactos'
import Tipearmensaje from './tipearmensaje'
import Banersuperior from './banersuperior'
import Mensajes from './mensajes'

export default function _(){
  return <div className='bg-green-600 w-screen h-screen relative'>
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
      <Mensajes/>
      <Tipearmensaje/>
    </>
  }
  return <h1 className="text-cyan-200">manten tu telefono conectado</h1>
}