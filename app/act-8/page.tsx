import { createClient } from "@/lib/supabase/server";
import TodosList from "./TodosList";
import Link from "next/link";

export default async function Act8() {
  const supabase = createClient();
  const user = (await supabase.auth.getUser()).data.user;

  const todos = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false })
    .eq("user", user?.id ?? "");

  if (!user)
    return (
      <div className="w-full h-full flex">
        <div className="m-auto flex gap-4 items-center justify-center flex-col">
          <p>Please login first to see your todos.</p>
          <Link href={"/login"}>
            <button className="px-4 py-2 rounded-md bg-black text-background">
              Log In
            </button>
          </Link>
        </div>
      </div>
    );
  return <TodosList todos={todos.data} user={user} />;
}
