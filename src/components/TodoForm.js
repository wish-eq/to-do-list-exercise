import React, { useState, useEffect, useRef } from "react";

// props = added a todo
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : ""); // [input from user, function to set] if editing, use editing one

  // to make website focus on typing when get in website
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  // When typing in form box
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  // When Submiting
  const handleSubmit = (e) => {
    e.preventDefault(); // so web doesn't refresh

    // set id and text of a todo after sumbit
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput(""); // So when submit, it deletes text in box
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
