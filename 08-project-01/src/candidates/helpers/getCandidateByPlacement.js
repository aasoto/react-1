import React from 'react'
import { candidates } from '../data';

export const getCandidateByPlacement = (placement = 'all') => {

  const validPlacements = ['semi-finalist', 'finalist', 'second runner up', 'first runner up', 'miss universe', 'miss congeniality', 'social impact award', 'spirit of carnival award', 'swimsuit cape vote', 'all'];


  switch (placement) {
    case 'all':
      return candidates;

    case 'runners-up':
      return candidates.filter(candidate => ((candidate.placement === 'first runner up') || (candidate.placement === 'second runner up')));

    default:
      return candidates.filter(candidate => candidate.placement === placement);
  }

  
}
