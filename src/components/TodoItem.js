import { useContext } from "react";
import { todoDispatchContext } from "../context/todoContext";
import EditTodo from "./EditTodo";
import styles from "./TodoItem.module.scss";

export default function TodoItem({ list }) {
  const dispatch = useContext(todoDispatchContext);
    return (
      <li
        className={`d-flex mb20 p10 align-items-center ${styles.TodoItem} ${list.id}`}
      >
        <span className={`${styles.Name} flex-fill mr10`}>
          {list.do ? list.content + "✓" : list.content}
        </span>
        <button
          className={`btn btn-primary mr10`}
          onClick={() =>
            dispatch({
              type: "TOGGLE_TODO",
              id: list.id,
            })
          }
        >
          {list.do ? "Fait" : "A Faire"}
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "EDIT_TODO",
              id: list.id,
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
              id: list.id,
            });
            console.log("bla");
          }}
        >
          Supprimé
        </button>
      </li>
    );
}
