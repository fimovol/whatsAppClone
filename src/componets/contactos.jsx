import Contacto from './contacto'

const datos =[
  {
    imagen :'imagen',
    nombre :'asldjkasldkñj',
    mensaje :'asfgsdgdfg',
    hora :'xcvbxcb',
  },
  {
    imagen :'imagen',
    nombre :'a',
    mensaje :'asfgsdgdfg',
    hora :'xcvbxcb',
  },
  {
    imagen :'imagen',
    nombre :'asldjkasldkñj',
    mensaje :'s',
    hora :'xcvbxcb',
  },
  {
    imagen :'imagen',
    nombre :'asldjkasldkñj',
    mensaje :'asfgsdgdfg',
    hora :'xcvbxcb',
  },
  {
    imagen :'imagen',
    nombre :'asldjkasldkñj',
    mensaje :'asd',
    hora :'23:00',
  },
]

export default function _(){
  return <div className="w-full h-auto bg-yellow-500">
    {
      datos.map(({imagen,nombre,mensaje,hora},iterador) => {
        return <Contacto key={iterador} imagen={imagen} nombre={nombre} mensaje={mensaje} hora={hora}/>
      })
    }
  </div>
}