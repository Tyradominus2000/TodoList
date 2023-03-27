import { useContext } from "react";
import { todoStateContext } from "../context/todoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const state = useContext(todoStateContext);

  return state.todoList.length ? (
    <ul>
      {state.todoList.map((l) => (
        <TodoItem key={l.id} name={l} />
      ))}
    </ul>
  ) : (
    <>
      <p>aucune todo pour le moment</p>
    </>
  );
}
