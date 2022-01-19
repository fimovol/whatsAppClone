export default function _(){
  return <div className="w-full h-28 bg-amber-300 flex items-center justify-center">
    <Svg/>
    <h1 className="w-8/12 text-center">Batería del teléfono baja Carga tu teléfono para poder seguir usando WhatsApp</h1>
    <Equis/>
  </div>
}

function Svg(){
  return <span data-testid="alert-battery" data-icon="alert-battery" className="">
    <svg viewBox="0 0 48 48" width="60" height="60" className="">
      <path fill="currentColor" d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm5.714 31.457H18.201V15.46h2.851v-1.99h5.866v1.99h2.949v17.997h.001zm-6.828-4.27h1.982v-1.982H23.04v1.982zm0-3.963h1.982V19.28H23.04v5.944z"></path>
    </svg>
  </span>
}
function Equis(){
  return <span data-testid="x" data-icon="x" className="_1K1wg">
    <svg viewBox="0 0 24 24" width="30" height="30" className="">
      <path fill="currentColor" d="m19.1 17.2-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path>
    </svg>
  </span>
}