"use client";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <PacmanLoader loading={true} color="#369092" className=" text-xl " />
      <p className=" m-5 leading-4">Loading your slow page...</p>
    </div>
  );
}
