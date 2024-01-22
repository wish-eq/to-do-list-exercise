import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]); // list of todos

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      // just to make form don't take "      " stuffs, don't be worried
      return;
    }
    const newTodos = [todo, ...todos]; // create new todo list that added new todo

    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  // setEdit after clikcing icon
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      // just to make form don't take "       " stuffs, don't worry
      return;
    }
    // looking for item needed to be updated
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // remove after clikcing icon
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  // when completing any todo
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  // under line "<Todo" is functions pass to Todo.js
  return (
    <div>
      <h1>What's up for today 👋</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
