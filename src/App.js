import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoHeader from "./components/TodoHeader";

let id = 3;

function App() {
  const rootStyle = {
    width: "70%",
    maxWidth: "1000px",
    margin: "30px auto 0",
    padding: "30px",
    border: "2px solid rgb(0 0 0 / 10%)",
    borderRadius: "4px",
  };

  const [todos, setTodos] = useState([
    {
      id: 0,
      content: "吃飯",
      isDone: true,
    },
    {
      id: 1,
      content: "寫文章",
      isDone: false,
    },
    {
      id: 2,
      content: "寫程式",
      isDone: false,
    },
  ]);

  const handleAddTodo = (content) => {
    setTodos([
      {
        id,
        content,
        isDone: false,
      },
      ...todos,
    ]);
    id++;
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodoState = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, isDone: !todo.isDone };
      })
    );
  };

  return (
    <div style={rootStyle}>
      <TodoHeader handleAddTodo={handleAddTodo}></TodoHeader>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleRemoveTodo={handleRemoveTodo}
            handleToggleTodoState={handleToggleTodoState}
          ></TodoItem>
        );
      })}
    </div>
  );
}

export default App;
