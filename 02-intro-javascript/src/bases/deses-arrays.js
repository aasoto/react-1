/**
 * DESESTRUCTURACIÓN DE ARREGLOS
 */

 const personajes = ['Gokú', 'Vegeta', 'Trunks'];
 /**Así se desestructura el elemento en la tercera posición */
 const [ , , p3] = personajes;
 console.log(p3);
 
 const retornaArreglo = () => {
   return ['ABC', 123];
 }
 
 const [letras, numeros] = retornaArreglo();
 console.log(letras, numeros);
 
 const useState = (valor) => {
   return [valor, ()=>{console.log('Hola Mundo');}];
 }
 
 const [nombre, getNombre] = useState('Gokú');
 
 console.log(nombre);
 getNombre();