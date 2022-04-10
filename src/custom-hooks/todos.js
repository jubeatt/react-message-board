import { useState, useEffect, useRef } from "react";

export function useTodos() {
  const id = useRef(1);

  // 沒值的話會是 null
  // null || []
  const [todos, setTodos] = useState(() => {
    let todoData = window.localStorage.getItem("todos");
    if (todoData && todoData !== "[]") {
      todoData = JSON.parse(todoData);
      id.current = todoData[0].id + 1;
    } else {
      todoData = [];
    }
    return todoData;
  });

  // 更新 storage
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (content) => {
    setTodos([
      {
        id: id.current,
        content,
        isDone: false,
      },
      ...todos,
    ]);
    id.current++;
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

  return {
    id,
    todos,
    setTodos,
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodoState,
  };
}
