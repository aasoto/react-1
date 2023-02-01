import { useState } from "react"
import { UseForm } from "../../hooks/UseForm";

export const TodoAdd = ({showTodo}) => {

  const {description, onInputChange, onResetForm} = UseForm({
      description: ''
    });

    const onFormSubmit = (event) => {
      event.preventDefault();

      if (description.length <= 1) return;

      const newTodo = {
        id: new Date().getTime(),
        done: false,
        description: description,
      }

      showTodo(newTodo);
      onResetForm();
    }

  // const [formState, setFormState] = useState({
  //   id: new Date().getTime(),
  //   description: '',
  //   done: false
  // });

  // const {description} = formState;

  // const onInputChange = ({target}) => {
  //   const {name, value} = target;
  //   setFormState({
  //     ...formState,
  //     [ name ]: value,
  //   });
  // }

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   showTodo(formState);
  // }

  return (
    <form onSubmit={onFormSubmit}>
      <input 
        type="text" 
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value = {description}
        onChange = {(event) => onInputChange(event)}
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-2"
      >
        Agregar
      </button>
    </form>
  )
}
