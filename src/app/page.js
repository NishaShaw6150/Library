import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="bg-red-500 w-full h-full"></div>

      <div className="bg-blue-500 w-full h-full"></div>
    </div>
  );
}
