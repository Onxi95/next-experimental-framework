"use client";

import { useRouter } from "next/navigation";

export const RoutePush = () => {
  const router = useRouter();

  return (
    <>
      <button
        className="bg-slate-600 p-5 rounded-md"
        onClick={() => router.push('/?search="something"')}
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        set "search" to "something" (button route push)
      </button>
      <br />
      <br />
      <br />
      <button
        className="bg-slate-600 p-5 rounded-md"
        onClick={() => router.push("/")}
      >
        go back to / (button route push)
      </button>
    </>
  );
};
