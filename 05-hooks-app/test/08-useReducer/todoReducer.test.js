import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false,
  }];

  test('debe regresar el estado inicial', () => {

    const newState = todoReducer(initialState, {});
    expect( newState ).toBe( initialState );

  });

  test('debe agregar un TODO', () => {

    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false
      }
    };

    const newState = todoReducer(initialState, action);
    expect( newState.length ).toBe( 2 );
    expect( newState ).toContain( action.payload );

  });

  test('debe eliminar un TODO', () => {

    const initialState = [{
      id: 1,
      description: 'Demo Todo',
      done: false,
    },{
      id: 2,
      description: 'Nuevo todo #2',
      done: false
    }];

    const action = {
      type: '[TODO] Remove Todo',
      payload: 2
    };

    const newState = todoReducer(initialState, action);
    expect( newState.length ).toBe( 1 );
    expect( newState ).not.toContain( action.payload );

  });

  test('debe hacer toggle en un TODO', () => {

    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();

  });

});