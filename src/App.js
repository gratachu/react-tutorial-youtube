import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    {id: 1, name: "Todo1", completed: false}, 
    {id: 2, name: "Todo2", completed: true}
  ]);

  return (
    <div>
      {/* todos という名前でTodoListというコンポーネントへ渡すという記述になる */}
      <TodoList todos={todos}/>
      <input type="text" />
      <button>タスクの追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク数: 0</div>
    </div>
  );
}

export default App;
