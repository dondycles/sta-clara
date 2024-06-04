import { Database } from "@/database.types";
import { useRef, useState } from "react";
import { deleteTodo, markDone, markNotDone } from "./actions";

export default function Todo({
  todo,
}: {
  todo: Database["public"]["Tables"]["todos"]["Row"];
}) {
  const checkbox = useRef<HTMLInputElement>(null);
  const [isMarking, setIsMarking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteTodo = async (todoId: number) => {
    setIsDeleting(true);
    await deleteTodo(todoId);
  };
  const handleMarkDone = async (todoId: number) => {
    setIsMarking(true);
    await markDone(todoId);
    setIsMarking(false);
  };
  const handleMarkNotDone = async (todoId: number) => {
    setIsMarking(true);
    await markNotDone(todoId);
    setIsMarking(false);
  };
  return (
    <div
      key={todo.id}
      className={`flex flex-row gap-1 items-center w-full bg-yellow-500/10 p-4 rounded-md ${
        isDeleting && "opacity-50"
      }`}
    >
      <input
        disabled={isMarking}
        ref={checkbox}
        type="checkbox"
        checked={todo.is_done ?? false}
        onChange={() => {
          if (todo.is_done) return handleMarkNotDone(todo.id);
          handleMarkDone(todo.id);
        }}
      />
      <p className="mr-4">{todo.todo}</p>
      <button
        onClick={() => {
          handleDeleteTodo(todo.id);
        }}
        className="bg-red-500 p-2 rounded-md text-background ml-auto mr-0"
      >
        Delete
      </button>
    </div>
  );
}
