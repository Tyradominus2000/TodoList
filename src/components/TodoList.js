import { useContext } from "react";
import { todoStateContext } from "../context/todoContext";
import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const state = useContext(todoStateContext);

  return state.todoList.length ? (
    <ul>
      {state.todoList.map((list) =>
        list.edit ? (
          <EditTodo key={list.id} list={list} />
        ) : (
          <TodoItem key={list.id} list={list} />
        )
      )}
    </ul>
  ) : (
    <>
      <p>aucune todo pour le moment</p>
    </>
  );
}
