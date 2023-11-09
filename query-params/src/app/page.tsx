import Link from "next/link";
import { useRouter } from "next/navigation";
import { DummyComponent } from "./DummyComponent";
import { SearchParam } from "./SearchParam";
import { Suspense } from "react";
import { RoutePush } from "./RoutePush";

export default function Home() {
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
        <RoutePush />
      </div>
    </main>
  );
}
