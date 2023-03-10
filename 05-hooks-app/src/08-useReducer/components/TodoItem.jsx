
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  const {id, description, done} = todo;
  return (
    <li key={id} className="list-group-item d-flex justify-content-between">
      <span aria-label="span"
        className={`align-self-center ${ (done) ? 'text-decoration-line-through' : '' }`}
        onClick={() => onToggleTodo(id)}
      >{description}</span>
      <button 
        aria-label="btn-delete"
        className="btn btn-danger"
        onClick={() => onDeleteTodo(id)}
      >
        Borrar
      </button>
    </li>
  )
}
