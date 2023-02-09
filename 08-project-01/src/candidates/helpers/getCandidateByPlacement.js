import React from 'react'
import { candidates } from '../data';

export const getCandidateByPlacement = (placement = 'all') => {

  const validPlacements = ['semi-finalist', 'finalist', 'second runner up', 'first runner up', 'miss universe', 'miss congeniality', 'social impact award', 'spirit of carnival award', 'swimsuit cape vote', 'all'];

  if (!validPlacements.includes(placement)) {
    throw new Error(`${placement} is not a valid placement`);
  }

  if (placement === 'all') {
    return candidates;
  }

  return candidates.filter(candidate => candidate.placement === placement);
}
