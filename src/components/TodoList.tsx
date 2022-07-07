import React from "react";
import "./TodoList.css";
interface TodoListProps {
  items: { id: number; text: string }[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDelete.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
