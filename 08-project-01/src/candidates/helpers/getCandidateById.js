import { candidates } from "../data"

export const getCandidateById = (id) => {
  return candidates.find(candidate => candidate.id === id);
}