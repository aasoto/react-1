import { UseForm } from "./hooks/UseForm"

export const FormWithCustomHook = () => {
  
  const {username, email, password, formState, onInputChange, onResetForm} = UseForm({
    username: '',
    email: '',
    password: '',
  });
  
  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Usuario"
        name="username"
        value={username}
        onChange={(event) => onInputChange(event)}
      />

      <input 
        type="email"
        className="form-control mt-2"
        placeholder="Correo electronico"
        name="email"
        value={email}
        onChange={(event) => onInputChange(event)}
      />

      <input 
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={(event) => onInputChange(event)}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
    </>
  )
}
