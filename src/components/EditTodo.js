import { useContext, useState } from "react";
import { todoDispatchContext } from "../context/todoContext";

export default function EditTodo({ list, changeTodo }) {
  const [value, setValue] = useState(list.content);
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
      dispatch({
        type: "EDIT_TODO",
        id: list.id,
      });
      setValue("");
    } else {
      setValue("");
    }
  }

  function handleClickSave() {
    let valueTrim = value.trim();
    if (valueTrim.length) {
      dispatch({
        type: "CHANGE_TODO",
        id: list.id,
        content: value,
      });
      setValue("");
    } else {
      setValue("");
    }
  }

  return (
    <li className="d-flex mb20 p10 align-items-center">
      <input
        type="text"
        defaultValue={list.content}
        onChange={handleChange}
        className="flex-fill mr20 p10"
      ></input>
      <button onClick={handleClick}>Cancel</button>
      <button onClick={handleClickSave}>Save</button>
    </li>
  );
}
