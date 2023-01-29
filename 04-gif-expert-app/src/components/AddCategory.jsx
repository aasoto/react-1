import { useState } from "react"

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('')

  /** Cambia el estado del input
   * es decir que se cambia el texto que contiene
   */
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  /** Se usa para evitar que el submit del formulario recargue la página */
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setCategories(categories => [inputValue, ...categories]);
    setInputValue('');
  }

  return (
    <form onSubmit={(event => onSubmit(event))}>
      <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ (event) => onInputChange(event) }
      />
    </form>
  )
}