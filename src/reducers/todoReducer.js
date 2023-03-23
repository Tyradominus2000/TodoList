export default function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: crypto.randomUUID(),
            content: action.content,
            edit: false,
            do: false,
          },
        ],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.id),
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id
            ? t
            : {
                ...t,
                do: !t.do,
              }
        ),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id
            ? t
            : {
                ...t,
                edit: !t.edit,
              }
        ),
      };
    }

    case "CHANGE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id
            ? t
            : {
                ...t,
                content: action.content,
                edit: false,
              }
        ),
      };
    }
    default: {
      throw new Error("Unknow action");
    }
  }
}

// function addTodo(value) {
//   const todo = {
//     id: crypto.randomUUID(),
//     content: value,
//     do: false,
//     edit: false,
//   };
//   setTodoList([...todoList, todo]);
// }

// function handleClickDel(id) {
//   console.log(id);
//   setTodoList(todoList.filter((e) => e.id !== id));
// }
// function handleClickVal(id, state) {
//   console.log(id + state);
//   const newList = [...todoList];
//   const items = newList.find((e) => e.id === id);
//   items.do = !items.do;
//   setTodoList(newList);
// }

// function modifyTodo(modif, id, value) {
//   if (!modif) {
//     const newList = [...todoList];
//     const items = newList.find((e) => e.id === id);
//     items.edit = !items.edit;
//     console.log(items.edit);
//     setTodoList(newList);
//   } else {
//     const newList = [...todoList];
//     const items = newList.find((e) => e.id === id);
//     items.edit = !items.edit;
//     items.content = value;
//     console.log(items.edit);
//     setTodoList(newList);
//   }
// }
