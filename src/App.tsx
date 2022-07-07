import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: todos.length + 1, text }]);
  };

  const todoDeleteHandler = (textId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== textId));
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodoHandler} />
      <TodoList items={todos} onDelete={todoDeleteHandler} />
    </div>
  );
}

export default App;
