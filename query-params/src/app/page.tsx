"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Home() {
  const q = useSearchParams();
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        search: {q.get("search")}
        <br />
        <Link
          className="bg-slate-600 p-5 rounded-md"
          href={'/?search="something"'}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          set "search" to "something"
        </Link>
        <br />
        <br />
        <br />
        <Link className="bg-slate-600 p-5 rounded-md" href={"/"}>
          go back to /
        </Link>
        <br />
        <br />
        <br />
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
        <button className="bg-slate-600 p-5 rounded-md">
          go back to / (button route push)
        </button>
      </div>
    </main>
  );
}
