import Contacto from './contacto'
import { createStore } from 'redux'
import counter from '../reducer'
const datos =[
  {
    imagen :'imagen',
    nombre :'asldjkasldkñj',
    mensaje :'ernesto de la cruz',
    hora :'xcvbxcb',
  },
  {
    imagen :'imagen',
    nombre :'a',
    mensaje :'dofia melgara',
    hora :'xcvbxcb',
  },
  {
    imagen :'imagen',
    nombre :'asldjkasldkñj',
    mensaje :'cristofer el rayas',
    hora :'xcvbxcb',
  },
  {
    imagen :'imagen',
    nombre :'asldjkasldkñj',
    mensaje :'juan el pendejo qeu sube contenido a internet de mala calidad',
    hora :'xcvbxcb',
  },
  {
    imagen :'imagen',
    nombre :'asldjkasldkñj',
    mensaje :'yo con mis ganas de superacion',
    hora :'23:00',
  },
]
export const store = createStore(counter)
export default function _(){
  return <div className="w-full h-auto bg-yellow-500">
    {
      datos.map(({imagen,nombre,mensaje,hora},iterador) => {
        return <Contacto 
          key={iterador} 
          imagen={imagen}
          nombre={nombre} 
          mensaje={mensaje}
          hora={hora} 
          onAparece={() => store.dispatch({ type: 'APARECE' })}
          crearNota={() => store.dispatch({
            type: 'CREARNOTA',
            payload: {
              iterador: iterador,
              imagen:imagen,
              nombre:nombre,
              mensaje:mensaje,
              hora:hora
            }
          })}/>
      })
    }
  </div>
}