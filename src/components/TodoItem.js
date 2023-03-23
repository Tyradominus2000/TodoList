import EditTodo from "./EditTodo";
import styles from "./TodoItem.module.scss";

export default function TodoItem({ name, deleteTodo, editTodo, toggleTodo, changeTodo }) {
  if (!name.edit) {
    if (name.do) {
      return (
        <li
          className={`d-flex mb20 p10 align-items-center ${styles.TodoItem} ${name.id}`}
        >
          <span className={`${styles.Name} flex-fill mr10`}>
            {name.content} ✓
          </span>
          <button
            className={`btn btn-primary mr10`}
            onClick={() => toggleTodo(name.id)}
          >
            Fait
          </button>
          <button className="btn btn-primary mr10">Modifié</button>
          <button
            className="btn btn-primary-reverse mr10"
            onClick={() => deleteTodo(name.id)}
          >
            Supprimé
          </button>
        </li>
      );
    } else {
      return (
        <li
          className={`d-flex mb20 p10 align-items-center ${styles.TodoItem} ${name.id}`}
        >
          <span className={`${styles.Name} flex-fill mr10`}>
            {name.content}
          </span>
          <button
            className={`btn btn-primary mr10`}
            onClick={() => toggleTodo(name.id)}
          >
            A Faire
          </button>
          <button onClick={() =>editTodo(name.id)} className="btn btn-primary mr10">Modifié</button>
          <button
            className="btn btn-primary-reverse mr10"
            onClick={() => deleteTodo(name.id)}
          >
            Supprimé
          </button>
        </li>
      );
    }
  }else{
    return <EditTodo changeTodo={changeTodo} list={name} editTodo={editTodo}/>
  }
}
