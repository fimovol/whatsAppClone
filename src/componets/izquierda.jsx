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
    const {imagen,nombre,mensajes} = estado[ultimovalor -1] 
    const {mensaje,hora} =mensajes[1]
    return <>
      <Banersuperior imagen={imagen} nombre={nombre}/>
      <div className=' bg-pink-900 h-full w-full '>
        <div className='relative w-full h-full'>
          <div className='absolute w-full overflow-auto h-auto flex flex-col items-center justify-end bottom-0'>
            <Mensajes mensaje={mensaje} hora={hora}/> 
          </div>
        </div>
        
      </div>
      <Tipearmensaje/>
    </>
  }
  return <h1 className="text-cyan-200">manten tu telefono conectado</h1>
}