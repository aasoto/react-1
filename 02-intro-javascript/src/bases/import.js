import heroes, { owners } from "../data/heroes"

// console.log(owners);

export const getHeroeById = (id) => {
  return heroes.find(element => {
    if (element.id === id) {
      return true;
    } else {
      return false;
    }
  });
}

// console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) => {
  return heroes.filter(element => element.owner == owner);
}

// console.log(getHeroesByOwner('Marvel'));