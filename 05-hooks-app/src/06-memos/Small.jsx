import React from "react"

/**
 * El memo sirve para que un componente hijo solo se renderice de nuevo
 * cuando las props de este mismo cambien, si alguna caracteristica del padre 
 * cambia, este componente no se vuelve a dibujar.
 */

export const Small = React.memo(({value}) => {

  console.log('Me volví a dibujar');
  
  return (
    <small>{ value }</small>
  )
})
