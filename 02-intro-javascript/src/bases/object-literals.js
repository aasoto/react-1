const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 3274328,
    lat:14.23243,
    lng: 34.327428
  }
};

console.table(persona);

/**
 * No se pueden sacar copias de las variables de esta forma:
 * const persona2 = persona;
 * Porque este valor pasa es por referencia, es decir que solamente pasa su ubicación en memoria.
 * Para hacer este tipo de copias se debe usar el operador Spread que copia el object en una nueva ubicación en memoria.
 */

const persona2 = {...persona};
persona2.nombre = 'Alejandro';

console.log(persona);
console.log(persona2);