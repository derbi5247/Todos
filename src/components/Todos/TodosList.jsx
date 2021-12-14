import './todos.css'
import TodoItem from './TodoItem';

const TodosList = ({ todos }) => {
    return (
      <ul className="list">
          {
            todos.map((todo, index) => <TodoItem key={index} todo={todo} index={index} />)
          }
      </ul>
    )
  }

  export default TodosList;