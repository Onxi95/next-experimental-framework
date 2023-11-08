"use client";

import { useContext, useState } from "react";
import { stateContext } from "./StateProvider";

export const DummyComponent = () => {
  const { state, setState } = useContext(stateContext);
  return (
    <div className="flex justify-center mt-10">
      <button
        className="bg-slate-900 p-5 rounded-md"
        onClick={() => setState((prev) => prev + 1)}
      >
        increment number: {state}
      </button>
    </div>
  );
};
