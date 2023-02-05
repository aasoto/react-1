import { useState } from "react";

export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [ name ]: value,
    });
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  return ({
    ...formState, //manda todos los campos que se encuentran en este objecto ya desestructurados.
    formState,
    onInputChange,
    onResetForm
  })
}
