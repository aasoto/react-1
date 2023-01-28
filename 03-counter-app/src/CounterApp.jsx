import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => {
    setCounter((c) => {
      return c + 1;
    })
  }

  const handleSubtract = () => {
    setCounter((c) => {
      return c - 1;
    })
  }

  const handleReset = () => {
    setCounter(value)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2 aria-label='counter'> { counter } </h2>

      <button aria-label='increment' onClick={ handleAdd }> +1 </button>
      <button aria-label='decrement' onClick={ handleSubtract }> -1 </button>
      <button aria-label='reset' onClick={ handleReset }> Reset </button>

    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}