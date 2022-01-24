import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../App.scss";

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  return (
    <main className="container">
      <section className="form">
        <h1 className="title">LKMX - Front-end</h1>
        <div className="card">
          <h2>To do list</h2>
          <TodoForm onSubmit={addTodo} />
          <div className="list_container">
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
