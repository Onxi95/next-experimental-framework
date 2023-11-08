import Link from "next/link";
import { useRouter } from "next/navigation";
import { DummyComponent } from "./DummyComponent";
import { SearchParam } from "./SearchParam";
import { Suspense } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DummyComponent />
      <div>
        <br />
        <br />
        <br />
        <Suspense fallback={<div>loading...</div>}>
          <SearchParam />
        </Suspense>
        <br />
        <br />
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
        <button
          className="bg-slate-600 p-5 rounded-md"
          onClick={() => router.push("/")}
        >
          go back to / (button route push)
        </button>
      </div>
    </main>
  );
}
