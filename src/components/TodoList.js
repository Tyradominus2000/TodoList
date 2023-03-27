import { useContext } from "react";
import { todoStateContext } from "../context/todoContext";
import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const state = useContext(todoStateContext);

  return state.todoList.length ? (
    <ul>
      {state.todoList.map((l) =>
        l.edit ? (
          <EditTodo key={l.id} list={l} />
        ) : (
          <TodoItem key={l.id} list={l} />
        )
      )}
    </ul>
  ) : (
    <>
      <p>aucune todo pour le moment</p>
    </>
  );
}
