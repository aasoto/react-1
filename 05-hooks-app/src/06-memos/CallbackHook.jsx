import { useCallback } from "react";
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  /**
   * El useCallback es un hook que permite guardar en memoria una función que se encuentra en
   * un componente padre que tiene un componente hijo y este tiene aplicado un React.memo, ya que
   * debido a que el compomente hijo recibe por medio de las props una función, en este
   * caso un contador; la función el padre no se puede memorizar en el hijo, por lo que
   * es necesario aplicar un useCallback en la función del padre para que el hijo pueda 
   * memorizarla.
   * Por último, dentro del setCounter se tiene que aplicar un callback para que pueda obtener
   * el valor guardado del mismo ya que como esta función no tiene una lista de dependencias,
   * solo puede generarse una vez.
   */
  const incrementFather = useCallback(
    (increase) => {
      setCounter( (value) => value + increase);
    },
    [],
  )
  
  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather}/>
    </>
  )
}
