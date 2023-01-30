import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

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

    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={(event => onSubmit(event))} aria-label="main-form">
      <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ (event) => onInputChange(event) }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}