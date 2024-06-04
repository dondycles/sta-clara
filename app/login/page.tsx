"use client";
import { login, signup } from "./actions";

export default function LogIn() {
  return (
    <main className="h-full w-full flex p-4">
      <form className="m-auto flex flex-col gap-4 border p-4 w-full rounded-lg shadow-sm max-w-[400px]">
        <label htmlFor="email">Email:</label>
        <input
          className="p-4 border rounded-md"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="p-4 border rounded-md"
          id="password"
          name="password"
          type="password"
          required
        />
        <button
          formAction={login}
          className="
        bg-black text-background py-2 px-4 rounded-md"
        >
          Log in
        </button>
        <button
          formAction={signup}
          className="
        bg-black/10 py-2 px-4 rounded-md"
        >
          Sign up
        </button>
      </form>
    </main>
  );
}
