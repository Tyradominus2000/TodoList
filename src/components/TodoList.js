import TodoItem from "./TodoItem";

export default function TodoList({ list }) {
  console.log({ list });
  return list.length ? (
    <ul>
      {list.map((l) => (
        <TodoItem key={list.id} name={l} />
      ))}
    </ul>
  ) : (
    <>
      <p>aucune todo pour le moment</p>
    </>
  );
}
