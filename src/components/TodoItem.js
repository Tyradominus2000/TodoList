import { useContext } from "react";
import { todoDispatchContext } from "../context/todoContext";
import EditTodo from "./EditTodo";
import styles from "./TodoItem.module.scss";

export default function TodoItem({ name }) {
  const dispatch = useContext(todoDispatchContext);

  if (!name.edit) {
    return (
      <li
        className={`d-flex mb20 p10 align-items-center ${styles.TodoItem} ${name.id}`}
      >
        <span className={`${styles.Name} flex-fill mr10`}>
          {name.do ? name.content + "✓" : name.content}
        </span>
        <button
          className={`btn btn-primary mr10`}
          onClick={() =>
            dispatch({
              type: "TOGGLE_TODO",
              id: name.id,
            })
          }
        >
          {name.do ? "Fait" : "A Faire"}
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "EDIT_TODO",
              id: name.id,
            })
          }
          className="btn btn-primary mr10"
        >
          Modifié
        </button>
        <button
          className="btn btn-primary-reverse mr10"
          onClick={() => {
            dispatch({
              type: "DELETE_TODO",
              id: name.id,
            });
            console.log("bla");
          }}
        >
          Supprimé
        </button>
      </li>
    );
  } else {
    return <EditTodo list={name} />;
  }
}
