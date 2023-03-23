import TodoItem from "./TodoItem";

export default function TodoList({ list, deleteTodo, editTodo, toggleTodo, changeTodo }) {
  console.log({ list });
  return list.length ? (
    <ul>
      {list.map((l) => (
        <TodoItem
          key={list.id}
          name={l}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          changeTodo={changeTodo}
        />
      ))}
    </ul>
  ) : (
    <>
      <p>aucune todo pour le moment</p>
    </>
  );
}
