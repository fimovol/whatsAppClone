import {store} from './contactos'
export default function _(){
  return <div className='bg-green-600 w-screen h-screen'>
    <Nashe/>
  </div>  
}

function Nashe(){
  console.log(store.getState())
  if(store.getState()[0].numero){
    return store.getState().map( ({mensaje},iterador) => {
      return <h1 key={iterador} className="text-cyan-200">mostrando la nueva ventana {mensaje}</h1>
    })
    
  }
  return <h1 className="text-cyan-200">manten tu telefono conectado</h1>
}