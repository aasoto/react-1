import { candidates } from "../data"

export const getCandidateByName = (name) => {
  
  return candidates.filter( candidate => {
    return name && candidate.name.toLocaleLowerCase().includes(name);
  });

}