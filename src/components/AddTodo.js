import styles from "./AddTodo.module.scss";
import { useContext, useState } from "react";
import { todoDispatchContext } from "../context/todoContext";

export default function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useContext(todoDispatchContext);

  function handleChange(e) {
    console.log(e.target.value);
    const todoValue = e.target.value;
    if (todoValue) {
      setValue(todoValue);
    } else {
      setValue("");
    }
  }

  function handleClick() {
    let valueTrim = value.trim();
    if (valueTrim.length) {
      dispatch({ type: "ADD_TODO", content: valueTrim });
      setValue("");
    } else {
      setValue("");
    }
  }

  return (
    <>
      <h2>Add Todo</h2>
      <div className={`d-flex justify-content-center${styles.AddTodo}`}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="flex-fill mr20 p10"
          placeholder="Add..."
        ></input>
        <button className="btn btn-primary" onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
}
