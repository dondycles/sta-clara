"use client";
import { useState } from "react";

export default function Act2() {
  const [number, setNumber] = useState(0);
  const isEven = Boolean(number % 2 === 0);

  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  const decrement = () => {
    setNumber((prev) => prev - 1);
  };

  const reset = () => {
    setNumber(0);
  };
  return (
    <div className="w-full h-full flex">
      <div className="h-fit w-fit m-auto flex flex-col gap-4 items-center ">
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-2xl font-bold">{isEven ? "Even" : "Odd"}</p>
        <div className="flex flex-row gap-4 w-full">
          <button
            onClick={increment}
            className="px-4 py-2 bg-foreground text-background rounded-md flex-1"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-foreground text-background rounded-md flex-1"
          >
            Decrement
          </button>
        </div>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-background rounded-md w-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
