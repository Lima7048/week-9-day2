"use client";
import { Suspense } from "react";
import SlowComponent from "@/component/SlowComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FastPage() {
  return (
    <div>
      <h2>Fast page</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
