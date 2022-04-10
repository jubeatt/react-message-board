import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader";
import { useTodos } from "../../custom-hooks/todos";

export default function TodoApp() {
  const { todos, handleAddTodo, handleRemoveTodo, handleToggleTodoState } =
    useTodos();

  return (
    <>
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
    </>
  );
}
