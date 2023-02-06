import { types } from "../types/types";

 /** Los reducers solo están destinados a ser funciones puras. 
  * Estos no llaman recursos externos ni funciones externas */
export const authReducer = (state = {}, action) => {

  switch (action.type) {

    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      };
    
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }

}