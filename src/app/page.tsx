import Image from "next/image";
import Loading from "@/component/loading";
import SlowComponent from "@/component/SlowComponent";

export default function Home() {
  return (
    <div>
      <p className="font-mono m-1 text-blue-50 bg-green-100 bg-opacity-30 text-7xl flex flex-col items-center backdrop-blur">
        HOME PAGE
      </p>
      <Loading />
      <SlowComponent />
      <span className=" text-9xl flex justify-center ">🧘🏾</span>
    </div>
  );
}
