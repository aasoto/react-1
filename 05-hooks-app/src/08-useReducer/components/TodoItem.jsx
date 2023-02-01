
export const TodoItem = ({todo, onDeleteTodo}) => {
  const {id, description} = todo;
  return (
    <li key={id} className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{description}</span>
      <button 
        className="btn btn-danger"
        onClick={() => onDeleteTodo(id)}
      >
        Borrar
      </button>
    </li>
  )
}
