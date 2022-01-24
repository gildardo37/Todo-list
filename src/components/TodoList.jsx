import React, { useState } from "react";
import TodoForm from "./TodoForm";
import edit_icon from "../assets/icon-pen.svg";
import delete_icon from "../assets/icon-trash.svg";
import "../App.scss";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return todos.map((todo) =>
      todo.id === edit.id ? (
        <TodoForm key={todo.id} edit={edit} onSubmit={submitUpdate} />
      ) : (
        <div className="list_row" key={todo.id}>
          <p key={todo.id}>{todo.text}</p>
          <button className="icon_btn" disabled>
            <img src={edit_icon} />
          </button>
          <button className="icon_btn" disabled>
            <img src={delete_icon} />
          </button>
        </div>
      )
    );
  }

  if (todos.length === 0) {
    return (
      <div className="empty">
        <h5>No has agregado tareas</h5>
      </div>
    );
  }

  return todos.map((todo, index) => (
    <div className="list_row" key={index}>
      <p key={todo.id}>{todo.text}</p>
      <button
        className="icon_btn"
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
      >
        <img src={edit_icon} />
      </button>
      <button className="icon_btn" onClick={() => removeTodo(todo.id)}>
        <img src={delete_icon} />
      </button>
    </div>
  ));
};

export default TodoList;
