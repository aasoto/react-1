import { useState } from "react"

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
        className="form-control"
        placeholder="andres@example.com"
        name="email"
        value={email}
        onChange={(event) => onInputChange(event)}
      />
    </>
  )
}
