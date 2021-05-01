import React, { Suspense, lazy } from "react";
import Widget from "./W";

const PageEditor = lazy(() => import("./PageEditor"));

export default function Page() {
  return (
    <>
      {typeof window !== "undefined" ? (
        <Suspense fallback={<p>Loading</p>}>
          <PageEditor />
        </Suspense>
      ) : (
        <Widget />
      )}
    </>
  );
}
