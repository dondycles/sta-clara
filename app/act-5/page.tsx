"use client";

import { useState } from "react";

export default function Act5() {
  const [todos, setTodos] = useState(["Take a bath", "Review", "Exercise"]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (new_todo: string) => {
    setTodos([...todos, new_todo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (delete_todo: string) => {
    let updatedTodo = todos.filter((todo) => todo !== delete_todo);
    setTodos(updatedTodo);
  };

  return (
    <div className="w-full h-full flex">
      <div className="h-fit w-fit m-auto flex flex-col gap-4 items-start">
        {todos.map((todo) => {
          return (
            <div
              key={todo}
              className="flex flex-row gap-1 items-center w-full bg-yellow-500/10 p-4 rounded-md"
            >
              <input type="checkbox" />
              <p className="mr-4">{todo}</p>
              <button
                onClick={() => handleDeleteTodo(todo)}
                className="bg-red-500 p-2 rounded-md text-background ml-auto mr-0"
              >
                Delete
              </button>
            </div>
          );
        })}
        <div className="flex flex-col gap-4">
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add todo"
            className="border-black border rounded-md p-4"
          />
          <button
            onClick={() => handleAddTodo(newTodo)}
            className="rounded-md bg-green-500 p-4 text-background"
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
}
