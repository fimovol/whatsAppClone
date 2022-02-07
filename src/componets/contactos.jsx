import Contacto from './contacto'
import { createStore } from 'redux'
import counter from '../reducer'
const datos =[
  {
    imagen :'https://cranky-tereshkova-b7162f.netlify.app/assets/gql.3a0bd593.jpg',
    nombre :'mario bros',
    mensaje :'ernesto de la cruz',
    hora :'19:00',
  },
  {
    imagen :'https://cranky-tereshkova-b7162f.netlify.app/assets/movil.78776bc7.jpg',
    nombre :'carlos',
    mensaje :'dofia melgara',
    hora :'20:00',
  },
  {
    imagen :'https://raw.githubusercontent.com/fimovol/portafolioj/master/src/fotos/scraping.jpg',
    nombre :'referido',
    mensaje :'cristofer el rayas',
    hora :'21:00',
  },
  {
    imagen :'https://raw.githubusercontent.com/fimovol/portafolioj/master/src/fotos/luces.jpg',
    nombre :'el mensajes',
    mensaje :'juan el pendejo ',
    hora :'22:00',
  },
  {
    imagen :'https://raw.githubusercontent.com/fimovol/portafolioj/master/src/fotos/calculadora.jpg',
    nombre :'funado',
    mensaje :'yo con mis ganas ',
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
          crearNota={() => store.dispatch({
            type: 'CREARNOTA',
            payload: {
              iterador: iterador,
              imagen:imagen,
              nombre:nombre,
              hora:hora,
            }
          })}/>
      })
    }
  </div>
}