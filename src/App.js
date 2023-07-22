import { useState, useRef } from "react";
import uuid4 from "uuid4";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;

    if (name.trim() === "") {
      todoNameRef.current.value = null;
      return;
    }

    setTodos((prevTodos) => {
      console.log(prevTodos);
      return [...prevTodos, {id: uuid4(), name: name, completed: false}];
    })

    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);

    todo.completed = !todo.completed;

    setTodos(newTodos);
  };

  const handleClear = () => {
    // completedがfalseのものだけを抽出して、新しい配列を作成している
    // 考え方: 終わったタスクを減らすのではなく終わっていないタスクを残すイメージ
    const newTodos = todos.filter((todo) => !todo.completed);

    setTodos(newTodos);
  };

  return (
    <div>
      {/* todos という名前でTodoListというコンポーネントへ渡すという記述になる */}
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク数: {todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
