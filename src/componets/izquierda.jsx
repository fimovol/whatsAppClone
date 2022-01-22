import {store} from './contactos'
export default function _(){
  return <div className='bg-green-600 w-screen h-screen'>
    <Nashe/>
  </div>  
}
function Nashe(){
  if(store.getState()){
    return <h1 className="text-cyan-200">mostrando la nueva ventana</h1>
  }
  return <h1 className="text-cyan-200">manten tu telefono conectado</h1>
}