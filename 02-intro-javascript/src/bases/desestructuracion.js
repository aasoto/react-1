const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
}

const useContext = ({clave, nombre, edad, rango = 'Alto'}) => {
  return {
    nombreClave: clave,
    anios: edad,
    location: {
      lat: 14.389432,
      lng: -12.32984
    }
  };
}

/**Desestructuración de un objecto dentro de otra desestructuración */
const {nombreClave, anios, location:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);