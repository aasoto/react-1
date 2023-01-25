/**
 * FUNCIONES
 */

 const saludar = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola, ${nombre}`;

const saludar3 = () => 'Hola Mundo';

console.log(saludar('Andrés'));
console.log(saludar2('Marcelo'));
console.log(saludar3());

const getUser = () => ({
  uid: 'ABC123',
  username: 'andresSoto1997'
});

console.log(getUser());