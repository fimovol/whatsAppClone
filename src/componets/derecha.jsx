import Controles from './controles'
import Bateria from './bateria'
import Buscador from './buscador'
import Contactos from './contactos'

export default function _(){
  return <div className='bg-red-500 w-96 h-screen'>
    <Controles/>
    <Bateria/>
    <Buscador/>
    <Contactos/>
  </div>
}

