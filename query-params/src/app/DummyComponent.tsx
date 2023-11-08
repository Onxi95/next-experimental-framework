"use client";

import { useState } from "react";

export const DummyComponent = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className="flex justify-center mt-10">
      <button
        className="bg-slate-900 p-5 rounded-md"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        increment number: {number}
      </button>
    </div>
  );
};
