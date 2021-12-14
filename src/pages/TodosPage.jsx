import TodosList from '../components/Todos/TodosList'

const TodosPage = () => {
    const todos = [
      {id: 1, title: 'Todo 1', checked: false}, 
      {id: 2, title: 'Todo 2', checked: false}, 
      {id: 3, title: 'Todo 3', checked: false}
    ]

    return (
      <div>
        <h1 className='title'>Todos</h1>
        <TodosList todos={todos} />
      </div>
    )
  }

  export default TodosPage;