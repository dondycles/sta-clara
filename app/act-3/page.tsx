"use client";

import { useState } from "react";

export default function Act3() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const sum = firstNumber + secondNumber;
  const reset = () => {
    setFirstNumber(0);
    setSecondNumber(0);
  };
  return (
    <div className="w-full h-full flex">
      <div className="h-fit w-fit m-auto flex flex-col gap-4 items-center ">
        <input
          id="firstnumber"
          placeholder="First number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(Number(e.target.value))}
          className="border-black border p-2 rounded-md"
        />

        <input
          id="secondnumber"
          placeholder="Second number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(Number(e.target.value))}
          className="border-black border p-2 rounded-md"
        />
        <p className="text-2xl">
          Sum: <span className="font-bold">{sum}</span>{" "}
        </p>
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
