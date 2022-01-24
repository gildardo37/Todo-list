import React, { useState } from "react";
import save_icon from "../assets/icon-disk.svg";
import "../App.scss";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="input_group">
      {props.edit ? (
        <>
          <input
            placeholder="Editar"
            value={input}
            onChange={handleChange}
            name="text"
          />
          <button onClick={handleSubmit} className="icon_btn">
            <img src={save_icon} />
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Agrega una tarea"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
          />
          <button onClick={handleSubmit} className="primary_btn">
            Agregar
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
