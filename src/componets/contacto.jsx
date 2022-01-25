import Fotoperfil from './fotoperfil'

export default function _({imagen,nombre,mensaje,hora,crearNota}){
  return <>
    <div className='bg-lime-300 flex items-center justify-center h-16' onClick={crearNota}>
      <Fotoperfil imagen={imagen} />
      <div className='w-44 flex flex-col items-start ml-4'>
        <h1>{nombre}</h1>
        <h1>{mensaje}</h1>
      
      </div>
      <h1 className='w-8'> {hora}</h1>
    
    </div>
  </> 
  
    
}