const activo = true;

/** OPERADOR TERNARIO NORMAL */
const mensaje = (activo)? 'Activo' : 'Inactivo';

/** OPERADOR TERNARIO SI SOLO SE DESEA OBTENER CONDICIÓN VERDADERA */
const mensaje2 = activo && 'Activo';

console.log(mensaje);
console.log(mensaje2);