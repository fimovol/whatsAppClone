export default function _({imagen}){

  if (imagen){
    return <img src={imagen} className="rounded-full w-12 h-12"/>
  }
  return <div className="rounded-full w-12 h-12 bg-orange-600">
  </div>
}