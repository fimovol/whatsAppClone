import Fotodeperfil from './fotoperfil'
export default function _({imagen,nombre}){
  return <div className='h-20 flex bg-slate-600 space-x-4 items-center relative'>
    <div className='ml-4'>
      <Fotodeperfil imagen={imagen}/>
    </div>
    <div className=''>
      <h1>{nombre}</h1>
      <h2>ahaha manasdofhndofbaf dfds f</h2>
    </div>
    <div className='absolute right-4'>
      <p>sadhasdj</p>
      <p>sadhasdj</p>
    </div>
  </div>
}