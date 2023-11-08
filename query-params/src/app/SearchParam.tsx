"use client";

import { useSearchParams } from "next/navigation";

export const SearchParam = () => {
  const q = useSearchParams();

  return <div>search: {q.get("search")}</div>;
};
