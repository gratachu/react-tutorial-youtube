import { useState, useRef } from "react";
import uuid4 from "uuid4";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    {id: uuid4(), name: "Todo1", completed: false}, 
    {id: uuid4(), name: "Todo2", completed: true}
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;

    setTodos((prevTodos) => {
      console.log(prevTodos);
      return [...prevTodos, {id: uuid4(), name: name, completed: false}];
    })

    todoNameRef.current.value = null;
  };

  return (
    <div>
      {/* todos という名前でTodoListというコンポーネントへ渡すという記述になる */}
      <TodoList todos={todos}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク数: 0</div>
    </div>
  );
}

export default App;
