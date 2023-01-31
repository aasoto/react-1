import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'aasoto',
    email: 'aasoto@gmail.com'
  });

  const {username, email} = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [ name ]: value,
    });
  }

  /** Cuando la lista de dependencias está vacia el useEffect solo
   *  se ejecuta una sola vez y es cuando el componente se renderiza.
   */
  useEffect(() => {  
    // console.log('useEffect called!');
  }, []);
  
  /** Aquí se ejecuta el useEffect cuando el estado de un campo del
   *  formulario cambia.
   */
  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);
  
  /** Aquí el campo del email ha cambiado por lo tanto se ejecuta el useEffect */
  useEffect(() => {
    // console.log('email changed!');
  }, [email]);
  
  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(event) => onInputChange(event)}
      />

      <input 
        type="email"
        className="form-control mt-2"
        placeholder="andres@example.com"
        name="email"
        value={email}
        onChange={(event) => onInputChange(event)}
      />

      {
        (username === 'aasotos') && <Message />
      }

    </>
  )
}
