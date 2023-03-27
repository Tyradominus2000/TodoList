import styles from "./App.module.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useReducer, useState } from "react";
import todoReducer from "./reducers/todoReducer";
import { todoStateContext, todoDispatchContext } from "./context/todoContext";

function App() {
  // const [todoList, setTodoList] = useState([]);
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
  });

  return (
    <>
      <todoStateContext.Provider value={state}>
        <todoDispatchContext.Provider value={dispatch}>
          <div
            className={`d-flex justify-content-center align-items-center ${styles.appContainer}`}
          >
            <div className={`card container p20 ${styles.content}`}>
              <h1 className="mb20">TODO LIST APP</h1>
              <div>
                <AddTodo />
              </div>
              <TodoList />
            </div>
          </div>
        </todoDispatchContext.Provider>
      </todoStateContext.Provider>
    </>
  );
}

export default App;
