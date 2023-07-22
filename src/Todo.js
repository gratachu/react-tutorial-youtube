import React from 'react'


const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
          {/* onChangeの中で直接toggleTodoを呼び出すのではなく、関数コンポーネントを定義する */}
          <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick} />
      </label>
      {todo.name}
    </div>
  )
}

export default Todo