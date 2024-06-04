"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function getTodos() {
  const supabase = createClient();
  const currentUser = await supabase.auth.getUser();

  if (!currentUser?.data?.user?.id) return { error: "No user." };
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user", currentUser?.data?.user?.id)
    .order("created_at", { ascending: false });

  if (error) return { error: error };

  return { data: data };
}

export const addTodo = async (todo: string) => {
  const supabase = createClient();
  const { error } = await supabase.from("todos").insert({
    todo: todo,
  });
  if (error) return error.message;

  revalidatePath("/act-8");
  return "added";
};

export const deleteTodo = async (todoId: number) => {
  const supabase = createClient();
  const { error } = await supabase.from("todos").delete().eq("id", todoId);
  if (error) return error.message;
  revalidatePath("/act-8");
  return "deleted";
};

export const markDone = async (todoId: number) => {
  const supabase = createClient();
  const { error } = await supabase
    .from("todos")
    .update({
      is_done: true,
    })
    .eq("id", todoId);
  if (error) return error.message;
  revalidatePath("/act-8");
  return "marked done";
};

export const markNotDone = async (todoId: number) => {
  const supabase = createClient();
  const { error } = await supabase
    .from("todos")
    .update({
      is_done: false,
    })
    .eq("id", todoId);
  if (error) return error.message;

  return "marked done";
};
