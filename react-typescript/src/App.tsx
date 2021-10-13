import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState([{ id: "t1", text: "Finish the course" }]);

  const todoAddHandler = (todoText: string) => {
    setTodos([
      ...todos,
      { id: `t${Math.round(Math.random() * 100)}`, text: todoText },
    ]);
    console.log("fired");
    console.log(todos);
  };

  return (
    <div className="App">
      <AddTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
