const newMessage = {
  message: 'Bienvenidos a mi primera aplicación.',
  title: ' Andrés Soto React'
}

const getMessage = () => {
  return newMessage.message;
}

const getTitle = () => {
  return newMessage.title;
}

const sumar = (a, b) => {
  return a + b;
}

export const FirstApp = () => {
  /**
   * Para agrupar un numero de elementos debe haber un nodo padre,
   * el cual se puede definir con la etiqueta <Fragment></Fragment>
   * de manera resumida <></>
   */
  return (
    <>
      <h1>{getTitle()}</h1>
      <h3>{sumar(5, 3)}</h3>
    </>
  );
}