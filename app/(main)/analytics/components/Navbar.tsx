import { LogOut, Rocket } from "lucide-react";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="bg-white z-10 px-2 py-5 lg:px-32 flex w-full justify-between items-center sticky top-0 left-0 right-0 border-b-4 border-orange-400">
      <div className="flex gap-x-2 items-center">
        <div className="rounded-full bg-orange-400 p-3">
          <Rocket className="h-14 w-14 md:h-20 md:w-20" />
        </div>
        <p className="font-bold text-md md:text-xl tracking-widest">
          Moonshot Analytics
        </p>
      </div>
      <button className="flex items-center gap-x-2 rounded-xl bg-[crimson] h-max px-5 py-3 text-white font-semibold">
        Logout <LogOut />
      </button>
    </nav>
  );
}
