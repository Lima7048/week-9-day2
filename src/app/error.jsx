"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Oh no! Something went wrong on that page! 🙈</h2>
        <p>{error.message}</p>
        <button
          className=" m-2 text-5xl bg-slate-500 bg-opacity-30 rounded-sm "
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  );
}

// function MyComponent() {
//     // the error always throws because we're deliberately causing a problem
//     // maybe we didn't get a param and this page will not work without it
//     throw new Error("I deliberately broke this page, because I'm a bad person");
//     return <div>My page content</div>;
//   }
