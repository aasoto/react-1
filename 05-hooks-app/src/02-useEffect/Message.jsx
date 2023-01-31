import { useState } from "react";
import { useEffect } from "react"

export const Message = () => {

  const [coords, setCoords] = useState({x:0, y:0});

  /**
   * Para usar el useEffect se debe tener un precaución y es que este una vez se monta debe ser desmontado después que se utiliza.
   * En este ejemplo se crea un eventListener el cual obtiene la posición del mouse en pantalla.
   * Para que este listener se pueda desmontar perfectamente se creo una función aparte que guarda el valor de las coordenadas en un State, y esta función se le pasa por referencia al callback cuando se monta el listener y a su vez se pasar por referencia cuando se desmonta el listener.
   */
  useEffect(() => {
     /** Función que manda la posición al state */
    const onMouseMove = ({ x, y }) => {
      setCoords({x, y});
    }

    /** Se monta el listener */
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      /** Se desmonta el listener */
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);
  

  return (
    <>
      <h4>Usuario ya existe</h4>
      {JSON.stringify(coords)}
    </>
  )
}
