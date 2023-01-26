import { getHeroeById } from "../bases/import";

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroeById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject('No se pudo encontrar el heroe...');
      }
    }, 2000);
  });
}

getHeroByIdAsync(10)
.then( resp => {
  console.log('Heroe: ', resp);
}).catch( error => {
  console.error(error);
});