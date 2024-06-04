"use client";

import { useState } from "react";

export default function Act4() {
  const [increments, setIncrements] = useState(1);
  const [color, setColor] = useState("#000000");
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const handleClick = () => {
    setIncrements((prev) => prev * 2);
    setColor(getRandomColor());
  };

  return (
    <div className="w-full h-full flex">
      <div className="h-fit w-fit m-auto flex flex-col gap-4 items-center ">
        <button
          onClick={handleClick}
          className={`px-4 py-2 bg-foreground text-background rounded-md w-full `}
          style={{ scale: increments, backgroundColor: color }}
        >
          GROW
        </button>
      </div>
    </div>
  );
}
