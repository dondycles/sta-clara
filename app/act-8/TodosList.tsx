"use client";

import { useEffect, useState } from "react";
import { Database } from "@/database.types";
import { addTodo, getTodos } from "./actions";
import { createClient } from "@/lib/supabase/client";
import Todo from "./Todo";
import { Button } from "@/components/ui/button";
import { User } from "@supabase/supabase-js";

export default function TodosList({
  todos,
  user,
}: {
  todos: Database["public"]["Tables"]["todos"]["Row"][] | null;
  user: User;
}) {
  const supabase = createClient();

  const [newTodo, setNewTodo] = useState("");
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  const handleAddTodo = async (newTodo: string) => {
    if (newTodo === "") return;
    setIsAddingTodo(true);
    await addTodo(newTodo);
    setNewTodo("");
    setIsAddingTodo(false);
  };

  useEffect(() => {
    const channels = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "todos" },
        () => {}
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channels);
    };
  }, [supabase]);

  return (
    <div className="w-full h-full flex">
      <div className="h-fit w-fit m-auto flex flex-col gap-4 items-start">
        <p>Hello, {user.email}</p>
        {todos &&
          todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        <div className="flex flex-col gap-4">
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add todo"
            className="border-black border rounded-md p-4"
          />
          <button
            disabled={isAddingTodo}
            onClick={() => handleAddTodo(newTodo)}
            className="rounded-md bg-green-500 p-4 text-background disabled:grayscale"
          >
            {isAddingTodo ? "Adding..." : "Add Todo"}
          </button>
          <Button
            onClick={() => {
              supabase.auth.signOut();
              location.reload();
            }}
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}
