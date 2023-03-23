import { useState } from "react";

export default function EditTodo({  list, changeTodo , editTodo }) {
  const [value, setValue] = useState(list.content);

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
      editTodo(list.id);
      console.log("value trim");
      setValue("");
    } else {
      setValue("");
      console.log("value trim false");
    }
  }

  function handleClickSave(){
    let valueTrim = value.trim();
    if (valueTrim.length) {
      changeTodo(list.id, value);
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
