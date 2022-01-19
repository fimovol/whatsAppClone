export default function _({imagen}){

  if (imagen){
    return <img src="https://raw.githubusercontent.com/fimovol/portafolioj/master/src/fotos/luces.jpg" className="rounded-full w-12 h-12"/>
  }
  return <div className="rounded-full w-12 h-12 bg-orange-600">
  </div>
}