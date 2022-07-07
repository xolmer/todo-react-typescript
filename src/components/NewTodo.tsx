import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  addTodo: (text: string) => void;
};

const NewTodo = (props: NewTodoProps) => {
  const todoRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodoText = todoRef.current!.value;
    props.addTodo(newTodoText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo">Todo</label>
        <input type="text" id="todo" ref={todoRef} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
