
export default function _(){
  const mensajeenviar = [
    {
      elemento:'mensaje de el de arriba',
      key:'enviado'
    },
    {
      elemento:'mensaje de este lado',
      key:'recibir'
    },
    {
      elemento:'mensaje de el de arriba',
      key:'enviado'
    },
    {
      elemento:'mensaje de este lado',
      key:'recibir'
    },
    {
      elemento:'mensaje de el de arriba',
      key:'enviado'
    },
    {
      elemento:'mensaje de este lado',
      key:'recibir'
    },
    {
      elemento:'mensaje de el de arriba',
      key:'enviado'
    },
    {
      elemento:'mensaje de este lado',
      key:'recibir'
    },
    {
      elemento:'mensaje de el de arriba',
      key:'enviado'
    },
    {
      elemento:'mensaje de este lado',
      key:'recibir'
    },
    {
      elemento:'mensaje de el de arriba',
      key:'enviado'
    },
    {
      elemento:'mensaje de este lado',
      key:'recibir'
    }
  ]

  return <>
    {
      mensajeenviar.map( i => { 
        const elemento = <div className=" my-3 mx-5 flex justify-end">
          <div className=" bg-green-300 rounded flex items-center justify-center w-max px-3 py-2">
            {i.elemento}
          </div> 
        </div>
        if (i.key === 'recibir'){
          return <div className=" my-3 mx-5">
            <div className=" bg-slate-100 rounded flex items-center justify-center w-max px-3 py-2">
              {i.elemento}
            </div> 
          </div>
        }
        return elemento
      })
    }
    <div className=" my-3 mx-5">
      <div className=" bg-slate-100 rounded flex items-center justify-center w-max px-3 py-2">
        holaasd asd asdas d asdasd sfsf
      </div> 
    </div>
  </>
}