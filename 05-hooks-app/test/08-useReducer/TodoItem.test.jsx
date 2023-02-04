import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/components/TodoItem";

describe('Pruebas en <TodoItem />', () => {

  /** Data inicial */
  const todo = {
    id: 1,
    description: 'Levantarse',
    done: false
  };

  /** Funciones */
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  /** Si hay mocks globales y se va a utilizar en diferentes tests se debe hacer una limpieza de estos cada vez que se termine una prueba. */
  beforeEach(() => jest.clearAllMocks());

  test('debe mostrar el TODO pendiente de completar', () => {

    render(
      <TodoItem 
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

      const liElement = screen.getByRole('listitem');
      expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

      const spanElement = screen.getByLabelText('span');
      expect(spanElement.className).toContain('align-self-center');
      expect(spanElement.className).not.toContain('text-decoration-line-through')

  });

  test('debe mostrar el TODO completo', () => {

    todo.done = true;

    render(
      <TodoItem 
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through')

  });

  test('span debe llamar el ToggleTodo cuando se hace click', () => {

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);

    /** si la función recibe algún argumento se debe utilizar este método */
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

  });

  test('debería dar click en eliminar y llamar la función con parametros', () => {

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByLabelText('btn-delete');
    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

  });

});